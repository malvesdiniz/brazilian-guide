import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GuideSectionCardContent } from '../../models';
import { AppImage } from '../app-image/app-image';
import { Icon } from '../icon/icon';

/**
 * One of the three large homepage cards linking to /brazil, /ceara, /fortaleza.
 */
@Component({
  selector: 'app-guide-section-card',
  standalone: true,
  imports: [RouterLink, AppImage, Icon],
  templateUrl: './guide-section-card.html',
  styleUrl: './guide-section-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuideSectionCard {
  readonly card = input.required<GuideSectionCardContent>();
}
