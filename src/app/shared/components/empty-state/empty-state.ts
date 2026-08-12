import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon } from '../icon/icon';
import { IconName } from '../../utilities/icon-registry';

/**
 * Friendly placeholder shown whenever there is nothing to display: no
 * filter matches, a map that failed to load, etc. Accepts optional
 * projected content (e.g. a "Clear filters" button) via <ng-content>.
 */
@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [Icon],
  templateUrl: './empty-state.html',
  styleUrl: './empty-state.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyState {
  readonly icon = input<IconName>('info');
  readonly title = input.required<string>();
  readonly description = input<string | undefined>(undefined);
}
