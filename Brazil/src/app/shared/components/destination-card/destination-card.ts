import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TravelDestination } from '../../models';
import { categoryIcon } from '../../utilities/category-icon';
import { AppImage } from '../app-image/app-image';
import { Icon } from '../icon/icon';

/**
 * Summary card for one destination. The card surface selects the
 * destination (used to sync with the map); the "View details" link
 * navigates to the full detail page.
 */
@Component({
  selector: 'app-destination-card',
  standalone: true,
  imports: [RouterLink, AppImage, Icon],
  templateUrl: './destination-card.html',
  styleUrl: './destination-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DestinationCard {
  readonly destination = input.required<TravelDestination>();
  readonly selected = input(false);
  /**
   * Set to false for secondary/duplicate renderings of the same destination
   * (e.g. a "featured" strip) so only one element on the page carries the
   * scroll-target id used to bring a card into view when its map marker
   * is selected.
   */
  readonly isScrollAnchor = input(true);

  readonly select = output<string>();

  protected readonly categoryIconName = computed(() => categoryIcon(this.destination().category));

  protected onSelect(): void {
    this.select.emit(this.destination().id);
  }
}
