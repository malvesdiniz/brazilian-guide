import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Small, unobtrusive loading indicator used for lazy-loaded route chunks
 * and while the map component initializes in the browser.
 */
@Component({
  selector: 'app-loading-state',
  standalone: true,
  templateUrl: './loading-state.html',
  styleUrl: './loading-state.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingState {
  readonly label = input('Loading…');
  /** Fills the height of its container instead of a compact inline bar. */
  readonly fullHeight = input(false);
}
