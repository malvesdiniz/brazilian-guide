import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DISCLAIMER_TEXT } from '../../../data/page-content.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Footer {
  protected readonly disclaimer = DISCLAIMER_TEXT;
  protected readonly year = new Date().getFullYear();
}
