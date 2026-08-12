import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { TravelDestination } from '../../models';
import { DestinationCard } from '../destination-card/destination-card';
import { EmptyState } from '../empty-state/empty-state';

/**
 * Responsive grid of destination cards with a built-in empty state for
 * when active filters match nothing.
 */
@Component({
  selector: 'app-destination-grid',
  standalone: true,
  imports: [DestinationCard, EmptyState],
  templateUrl: './destination-grid.html',
  styleUrl: './destination-grid.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DestinationGrid {
  readonly destinations = input.required<readonly TravelDestination[]>();
  readonly selectedId = input<string | undefined>(undefined);
  readonly emptyTitle = input('No destinations match your filters');
  readonly emptyDescription = input(
    'Try clearing a filter or choosing a different region or category.'
  );

  readonly select = output<string>();
}
