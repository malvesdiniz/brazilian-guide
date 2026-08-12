import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { Icon } from '../icon/icon';

/**
 * Displays an image with a consistent, friendly fallback when no `src` is
 * provided or the image fails to load. Used everywhere destination /
 * hero photography appears so replacing placeholder images later is a
 * one-line change per data file — this component never breaks layout.
 */
@Component({
  selector: 'app-image',
  standalone: true,
  imports: [Icon],
  templateUrl: './app-image.html',
  styleUrl: './app-image.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppImage {
  readonly src = input<string | undefined>(undefined);
  readonly alt = input<string>('');
  /** Optional short label (e.g. destination name) shown inside the fallback graphic. */
  readonly label = input<string | undefined>(undefined);

  protected readonly failed = signal(false);

  protected onError(): void {
    this.failed.set(true);
  }
}
