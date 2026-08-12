import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { FORTALEZA_TIPS } from '../../data/fortaleza-tips.data';
import { FORTALEZA_HERO } from '../../data/page-content.data';
import { MAP_VIEWS } from '../../core/config/map.config';
import { DestinationService } from '../../services/destination.service';
import { DestinationCard } from '../../shared/components/destination-card/destination-card';
import { DestinationFilters } from '../../shared/components/destination-filters/destination-filters';
import { DestinationGrid } from '../../shared/components/destination-grid/destination-grid';
import { HeroSection } from '../../shared/components/hero-section/hero-section';
import { InteractiveMap } from '../../shared/components/interactive-map/interactive-map';
import { SectionHeading } from '../../shared/components/section-heading/section-heading';
import { TipsGrid } from '../../shared/components/tips-grid/tips-grid';

@Component({
  selector: 'app-fortaleza',
  standalone: true,
  imports: [
    HeroSection,
    SectionHeading,
    TipsGrid,
    InteractiveMap,
    DestinationFilters,
    DestinationGrid,
    DestinationCard
  ],
  templateUrl: './fortaleza.html',
  styleUrl: './fortaleza.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Fortaleza {
  private readonly destinationService = inject(DestinationService);
  private readonly document = inject(DOCUMENT);

  protected readonly hero = FORTALEZA_HERO;
  protected readonly tips = FORTALEZA_TIPS;
  protected readonly mapView = MAP_VIEWS.fortaleza;

  protected readonly allDestinations = this.destinationService.getFortalezaDestinations();
  protected readonly featuredDestinations = this.destinationService.getFeaturedDestinations('fortaleza');
  protected readonly regions = this.destinationService.getRegions('fortaleza');
  protected readonly categories = this.destinationService.getCategories('fortaleza');

  protected readonly selectedRegion = signal<string | null>(null);
  protected readonly selectedCategory = signal<string | null>(null);
  protected readonly selectedId = signal<string | undefined>(undefined);

  protected readonly filteredDestinations = computed(() => {
    const region = this.selectedRegion();
    const category = this.selectedCategory();
    return this.allDestinations.filter(
      (destination) =>
        (!region || destination.region === region) && (!category || destination.category === category)
    );
  });

  constructor() {
    effect(() => {
      const id = this.selectedId();
      if (!id) {
        return;
      }
      const reduceMotion =
        this.document.defaultView?.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
      this.document
        .getElementById(`destination-card-${id}`)
        ?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'nearest' });
    });
  }

  protected selectDestination(id: string | null): void {
    this.selectedId.set(id ?? undefined);
  }

  protected clearFilters(): void {
    this.selectedRegion.set(null);
    this.selectedCategory.set(null);
  }
}
