import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TravelTip } from '../../models';
import { TipCard } from '../tip-card/tip-card';

/**
 * Responsive grid/accordion list of travel tips. Used on the homepage with
 * general-tips.data.ts and on each guide page with its page-specific tips.
 */
@Component({
  selector: 'app-tips-grid',
  standalone: true,
  imports: [TipCard],
  templateUrl: './tips-grid.html',
  styleUrl: './tips-grid.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TipsGrid {
  readonly tips = input.required<readonly TravelTip[]>();
}
