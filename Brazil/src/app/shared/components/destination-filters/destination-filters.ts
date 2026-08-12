import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { CategoryFilter } from '../category-filter/category-filter';
import { RegionSelector } from '../region-selector/region-selector';

/**
 * Combines RegionSelector and CategoryFilter with a "Clear filters" action.
 * Used on the Brazil, Ceará, and Fortaleza pages — pass region/category
 * lists derived from DestinationService so filter options stay in sync
 * with whatever destinations exist in the data files.
 */
@Component({
  selector: 'app-destination-filters',
  standalone: true,
  imports: [RegionSelector, CategoryFilter],
  templateUrl: './destination-filters.html',
  styleUrl: './destination-filters.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DestinationFilters {
  readonly regions = input.required<readonly string[]>();
  readonly categories = input.required<readonly string[]>();
  readonly selectedRegion = input<string | null>(null);
  readonly selectedCategory = input<string | null>(null);
  readonly regionLabel = input('Region');
  readonly regionAllLabel = input('All regions');

  readonly regionChange = output<string | null>();
  readonly categoryChange = output<string | null>();
  readonly clear = output<void>();

  protected readonly hasActiveFilters = computed(
    () => this.selectedRegion() !== null || this.selectedCategory() !== null
  );
}
