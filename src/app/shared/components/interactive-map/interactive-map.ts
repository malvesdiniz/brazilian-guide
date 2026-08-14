import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  PLATFORM_ID,
  afterNextRender,
  computed,
  effect,
  inject,
  input,
  output,
  signal,
  viewChild
} from '@angular/core';
// Static imports so 'leaflet.markercluster' augments the exact same Leaflet
// module instance (a dynamic import() of each can resolve to two separate
// module instances under some bundlers, which silently breaks clustering).
// Both are only ever pulled into this component's own lazy route chunk, so
// they never reach the app's initial bundle. Leaflet itself is only
// *executed* inside afterNextRender() (browser-only) below — this file
// deliberately avoids calling any Leaflet API at module-evaluation time so
// it would stay SSR-safe if this project ever adds server-side rendering.
import * as L from 'leaflet';
import 'leaflet.markercluster';
import { GestureHandling } from 'leaflet-gesture-handling';
import { MAP_DEFAULTS, TILE_LAYER_ATTRIBUTION, TILE_LAYER_URL } from '../../../core/config/map.config';
import { Coordinates, TravelDestination } from '../../models';
import { EmptyState } from '../empty-state/empty-state';
import { LoadingState } from '../loading-state/loading-state';
import { MapPopup } from '../map-popup/map-popup';

declare module 'leaflet' {
  interface MapOptions {
    gestureHandling?: boolean;
  }
}

// L.Map.addInitHook registers on the shared prototype, so this must only
// run once even though InteractiveMap can be constructed many times (one
// per page that embeds a map).
let gestureHandlingRegistered = false;

/**
 * Leaflet + OpenStreetMap wrapper. The map is only created inside
 * afterNextRender (browser-only), so this component degrades gracefully
 * anywhere Leaflet can't run.
 *
 * Selection is driven by `selectedDestinationId` and reported through
 * `destinationSelected` so a parent page can keep a card grid and this map
 * perfectly in sync in either direction.
 */
@Component({
  selector: 'app-interactive-map',
  standalone: true,
  imports: [LoadingState, EmptyState, MapPopup],
  templateUrl: './interactive-map.html',
  styleUrl: './interactive-map.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InteractiveMap implements OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);
  private readonly mapContainer = viewChild.required<ElementRef<HTMLElement>>('mapContainer');

  private leafletMap: L.Map | undefined;
  private clusterGroup: L.MarkerClusterGroup | undefined;
  private readonly markersById = new Map<string, L.Marker>();

  readonly destinations = input.required<readonly TravelDestination[]>();
  readonly selectedDestinationId = input<string | undefined>(undefined);
  readonly initialCenter = input.required<Coordinates>();
  readonly initialZoom = input.required<number>();
  /** Optional label used for the map's accessible name, e.g. "Ceará". */
  readonly region = input<string | undefined>(undefined);

  /** Emits the selected destination's id, or null when the popup is dismissed. */
  readonly destinationSelected = output<string | null>();
  readonly mapReady = output<void>();

  protected readonly ready = signal(false);
  protected readonly loadFailed = signal(false);

  protected readonly locatableDestinations = computed(() =>
    this.destinations().filter((destination): destination is TravelDestination & {
      coordinates: Coordinates;
    } => !!destination.coordinates)
  );

  protected readonly selectedDestination = computed(() =>
    this.destinations().find((destination) => destination.id === this.selectedDestinationId())
  );

  protected readonly mapLabel = computed(() =>
    this.region() ? `Interactive map of ${this.region()}` : 'Interactive map'
  );

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      afterNextRender(() => this.initializeMap());
    }

    effect(() => {
      const destinations = this.locatableDestinations();
      if (this.leafletMap) {
        this.renderMarkers(this.leafletMap, destinations);
      }
    });

    effect(() => {
      const id = this.selectedDestinationId();
      if (this.leafletMap) {
        this.focusSelection(this.leafletMap, id);
      }
    });
  }

  private prefersReducedMotion(): boolean {
    return this.document.defaultView?.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
  }

  private initializeMap(): void {
    try {
      if (!gestureHandlingRegistered) {
        L.Map.addInitHook('addHandler', 'gestureHandling', GestureHandling);
        gestureHandlingRegistered = true;
      }

      const center = this.initialCenter();
      const map = L.map(this.mapContainer().nativeElement, {
        center: [center.lat, center.lng],
        zoom: this.initialZoom(),
        minZoom: MAP_DEFAULTS.minZoom,
        maxZoom: MAP_DEFAULTS.maxZoom,
        scrollWheelZoom: MAP_DEFAULTS.scrollWheelZoom,
        gestureHandling: MAP_DEFAULTS.gestureHandling
      });

      L.tileLayer(TILE_LAYER_URL, {
        attribution: TILE_LAYER_ATTRIBUTION,
        maxZoom: MAP_DEFAULTS.maxZoom
      }).addTo(map);

      this.leafletMap = map;
      this.renderMarkers(map, this.locatableDestinations());
      this.ready.set(true);
      this.mapReady.emit();
    } catch {
      this.clusterGroup?.remove();
      this.leafletMap?.remove();
      this.leafletMap = undefined;
      this.loadFailed.set(true);
    }
  }

  ngOnDestroy(): void {
    this.clusterGroup?.off();
    this.clusterGroup?.remove();
    this.leafletMap?.remove();
    this.leafletMap = undefined;
  }

  private buildIcon(selected: boolean): L.DivIcon {
    return L.divIcon({
      className: '',
      html: `<span class="map-marker${selected ? ' map-marker--selected' : ''}" aria-hidden="true"></span>`,
      iconSize: [30, 30],
      iconAnchor: [15, 28],
      popupAnchor: [0, -26]
    });
  }

  private renderMarkers(
    map: L.Map,
    destinations: readonly (TravelDestination & { coordinates: Coordinates })[]
  ): void {
    this.clusterGroup?.remove();
    this.markersById.clear();

    const clusterGroup = L.markerClusterGroup({
      maxClusterRadius: MAP_DEFAULTS.clusterRadius,
      showCoverageOnHover: false,
      spiderfyOnMaxZoom: true,
      iconCreateFunction: (cluster) =>
        L.divIcon({
          className: '',
          html: `<span class="map-cluster">${cluster.getChildCount()}</span>`,
          iconSize: [38, 38]
        })
    });

    const selectedId = this.selectedDestinationId();

    for (const destination of destinations) {
      const marker = L.marker([destination.coordinates.lat, destination.coordinates.lng], {
        icon: this.buildIcon(destination.id === selectedId),
        alt: destination.name,
        keyboard: true,
        title: destination.name
      });
      marker.on('click', () => this.destinationSelected.emit(destination.id));
      this.markersById.set(destination.id, marker);
      clusterGroup.addLayer(marker);
    }

    clusterGroup.addTo(map);
    this.clusterGroup = clusterGroup;

    if (destinations.length > 0) {
      const bounds = L.latLngBounds(
        destinations.map((destination) => [destination.coordinates.lat, destination.coordinates.lng])
      );
      map.fitBounds(bounds, {
        padding: MAP_DEFAULTS.boundsPadding,
        maxZoom: this.initialZoom() + 3,
        animate: !this.prefersReducedMotion()
      });
    } else {
      const center = this.initialCenter();
      map.setView([center.lat, center.lng], this.initialZoom());
    }
  }

  private focusSelection(map: L.Map, id: string | undefined): void {
    for (const [markerId, marker] of this.markersById) {
      marker.setIcon(this.buildIcon(markerId === id));
    }

    if (!id) {
      return;
    }

    const marker = this.markersById.get(id);
    if (marker) {
      map.panTo(marker.getLatLng(), { animate: !this.prefersReducedMotion() });
    }
  }

  protected closePopup(): void {
    this.destinationSelected.emit(null);
  }
}
