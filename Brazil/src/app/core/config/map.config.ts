import { MapView } from '../../shared/models';

/**
 * Central place for map defaults. Edit here to change default map
 * positioning without touching any component.
 */
export const TILE_LAYER_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

export const TILE_LAYER_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors';

export const MAP_VIEWS: Record<'brazil' | 'ceara' | 'fortaleza', MapView> = {
  brazil: {
    center: { lat: -14.235, lng: -51.9253 },
    zoom: 4
  },
  ceara: {
    center: { lat: -4.85, lng: -39.5 },
    zoom: 7
  },
  fortaleza: {
    center: { lat: -3.7827, lng: -38.5225 },
    zoom: 12
  }
};

export const MAP_DEFAULTS = {
  minZoom: 3,
  maxZoom: 18,
  scrollWheelZoom: true,
  clusterRadius: 50,
  boundsPadding: [40, 40] as [number, number]
};
