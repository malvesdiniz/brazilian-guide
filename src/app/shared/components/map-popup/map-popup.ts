import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TravelDestination } from '../../models';
import { categoryIcon } from '../../utilities/category-icon';
import { AppImage } from '../app-image/app-image';
import { Icon } from '../icon/icon';

/**
 * Compact information panel shown when a map marker (or its matching card)
 * is selected. Rendered as regular DOM overlaid on the map — not a native
 * Leaflet popup — so it stays fully accessible and easy to style
 * consistently on both desktop and mobile.
 */
@Component({
  selector: 'app-map-popup',
  standalone: true,
  imports: [RouterLink, AppImage, Icon],
  templateUrl: './map-popup.html',
  styleUrl: './map-popup.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapPopup {
  readonly destination = input.required<TravelDestination>();
  readonly closed = output<void>();

  protected readonly categoryIconName = computed(() => categoryIcon(this.destination().category));
}
