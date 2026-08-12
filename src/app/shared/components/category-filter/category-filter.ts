import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

/**
 * Single-select chip group for filtering destinations by category.
 * Options are passed in — the page derives them from the data via
 * DestinationService.getCategories(), so the list never goes stale.
 */
@Component({
  selector: 'app-category-filter',
  standalone: true,
  templateUrl: './category-filter.html',
  styleUrl: './category-filter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryFilter {
  readonly categories = input.required<readonly string[]>();
  readonly selected = input<string | null>(null);
  readonly label = input('Category');
  readonly allLabel = input('All categories');

  readonly categoryChange = output<string | null>();
}
