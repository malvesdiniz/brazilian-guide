import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

/**
 * Single-select chip group for filtering destinations by region.
 * Options are passed in — the page derives them from the data via
 * DestinationService.getRegions(), so the list never goes stale.
 */
@Component({
  selector: 'app-region-selector',
  standalone: true,
  templateUrl: './region-selector.html',
  styleUrl: './region-selector.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionSelector {
  readonly regions = input.required<readonly string[]>();
  readonly selected = input<string | null>(null);
  readonly label = input('Region');
  readonly allLabel = input('All regions');

  readonly regionChange = output<string | null>();
}
