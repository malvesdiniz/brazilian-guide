import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Consistent heading block used at the top of page sections: an optional
 * eyebrow label, a heading, and an optional supporting description.
 * `level` controls which heading tag is rendered so pages keep a correct,
 * linear heading hierarchy (h1 on the page hero, h2 for major sections, etc).
 */
@Component({
  selector: 'app-section-heading',
  standalone: true,
  templateUrl: './section-heading.html',
  styleUrl: './section-heading.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionHeading {
  readonly eyebrow = input<string | undefined>(undefined);
  readonly title = input.required<string>();
  readonly description = input<string | undefined>(undefined);
  readonly level = input<2 | 3>(2);
  readonly align = input<'left' | 'center'>('left');
}
