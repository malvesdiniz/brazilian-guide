import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavLink } from '../../models';
import { Icon } from '../icon/icon';
import { MobileNavigation } from '../mobile-navigation/mobile-navigation';

const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Brazil', path: '/brazil' },
  { label: 'Ceará', path: '/ceara' },
  { label: 'Fortaleza', path: '/fortaleza' }
];

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, Icon, MobileNavigation],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {
  protected readonly navLinks = NAV_LINKS;
  protected readonly mobileNavOpen = signal(false);

  protected toggleMobileNav(): void {
    this.mobileNavOpen.update((open) => !open);
  }

  protected closeMobileNav(): void {
    this.mobileNavOpen.set(false);
  }
}
