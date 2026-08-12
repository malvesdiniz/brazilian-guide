import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon } from '../icon/icon';

/**
 * Link to an external, hand-written guide or reference site. Always opens
 * in a new tab with rel="noopener noreferrer" so the current page is never
 * put at risk by the destination site.
 */
@Component({
  selector: 'app-external-guide-button',
  standalone: true,
  imports: [Icon],
  templateUrl: './external-guide-button.html',
  styleUrl: './external-guide-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExternalGuideButton {
  readonly href = input.required<string>();
  readonly label = input('Read the complete guide');
  readonly variant = input<'primary' | 'secondary'>('primary');
}
