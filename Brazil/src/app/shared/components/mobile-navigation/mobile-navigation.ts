import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavLink } from '../../models';

/**
 * Full-width collapsible panel used for primary navigation on small
 * screens. Controlled entirely by Header via the `open` input.
 */
@Component({
  selector: 'app-mobile-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './mobile-navigation.html',
  styleUrl: './mobile-navigation.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileNavigation {
  private readonly document = inject(DOCUMENT);

  readonly open = input.required<boolean>();
  readonly links = input.required<NavLink[]>();
  readonly closeRequested = output<void>();

  constructor() {
    effect(() => {
      this.document.body.style.overflow = this.open() ? 'hidden' : '';
    });
  }

  protected onLinkClick(): void {
    this.closeRequested.emit();
  }
}
