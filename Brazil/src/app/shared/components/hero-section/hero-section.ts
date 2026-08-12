import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HeroContent } from '../../models';
import { AppImage } from '../app-image/app-image';

/**
 * Large page-top hero used on the homepage and each guide page. Renders the
 * page's single <h1>. Pass call-to-action buttons via <ng-content>.
 */
@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [AppImage],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSection {
  readonly content = input.required<HeroContent>();
}
