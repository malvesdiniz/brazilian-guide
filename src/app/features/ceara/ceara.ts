import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { CEARA_TIPS } from '../../data/ceara-tips.data';
import { CEARA_COAST_COMPARISON, CEARA_HERO } from '../../data/page-content.data';
import { MAP_VIEWS } from '../../core/config/map.config';
import { DestinationService } from '../../services/destination.service';
import { CategoryFilter } from '../../shared/components/category-filter/category-filter';
import { DestinationGrid } from '../../shared/components/destination-grid/destination-grid';
import { HeroSection } from '../../shared/components/hero-section/hero-section';
import { Icon } from '../../shared/components/icon/icon';
import { InteractiveMap } from '../../shared/components/interactive-map/interactive-map';
import { RegionSelector } from '../../shared/components/region-selector/region-selector';
import { SectionHeading } from '../../shared/components/section-heading/section-heading';
import { TipsGrid } from '../../shared/components/tips-grid/tips-grid';

@Component({
  selector: 'app-ceara',
  standalone: true,
  imports: [
    HeroSection,
    SectionHeading,
    TipsGrid,
    InteractiveMap,
    RegionSelector,
    CategoryFilter,
    DestinationGrid,
    Icon
  ],
  templateUrl: './ceara.html',
  styleUrl: './ceara.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Ceara {
  private readonly destinationService = inject(DestinationService);
  private readonly document = inject(DOCUMENT);

  protected readonly hero = CEARA_HERO;
  protected readonly tips = CEARA_TIPS;
  protected readonly mapView = MAP_VIEWS.ceara;
  protected readonly coastComparison = CEARA_COAST_COMPARISON;

  protected readonly allDestinations = this.destinationService.getCearaDestinations();
  protected readonly regions = this.destinationService.getRegions('ceara');
  protected readonly categories = this.destinationService.getCategories('ceara');

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

  protected selectCoast(coast: string | null): void {
    this.selectedRegion.set(coast);
  }

  protected clearFilters(): void {
    this.selectedRegion.set(null);
    this.selectedCategory.set(null);
  }
}
