import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { TravelTip } from '../../models';
import { Icon } from '../icon/icon';
import { ICONS, IconName } from '../../utilities/icon-registry';

/**
 * Single accessible accordion item for a travel tip. Expand/collapse state
 * is local to the card so many can be used together in a <app-tips-grid>.
 */
@Component({
  selector: 'app-tip-card',
  standalone: true,
  imports: [Icon],
  templateUrl: './tip-card.html',
  styleUrl: './tip-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TipCard {
  readonly tip = input.required<TravelTip>();
  /** Expand this card by default (e.g. the first tip in a list). */
  readonly startExpanded = input(false);

  protected readonly expanded = signal(false);
  protected readonly iconName = computed<IconName>(() => {
    const name = this.tip().icon;
    return name && name in ICONS ? (name as IconName) : 'info';
  });

  protected readonly panelId = computed(() => `tip-panel-${this.tip().id}`);
  protected readonly triggerId = computed(() => `tip-trigger-${this.tip().id}`);

  constructor() {
    this.expanded.set(this.startExpanded());
  }

  protected toggle(): void {
    this.expanded.update((value) => !value);
  }
}
