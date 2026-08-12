import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { ICONS, IconName } from '../../utilities/icon-registry';

/**
 * Renders a Lucide icon by semantic name from the shared icon registry.
 * Usage: <app-icon name="beach" />
 */
@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [LucideDynamicIcon],
  template: `<svg
    [lucideIcon]="iconData()"
    [size]="size()"
    [strokeWidth]="strokeWidth()"
    class="app-icon"
    aria-hidden="true"
  ></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input<number | string>(20);
  readonly strokeWidth = input<number | string>(1.75);

  protected readonly iconData = computed(() => ICONS[this.name()]);
}
