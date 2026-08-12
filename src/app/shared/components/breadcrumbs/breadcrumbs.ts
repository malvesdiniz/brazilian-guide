import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Breadcrumb } from '../../models';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [RouterLink, Icon],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Breadcrumbs {
  readonly items = input.required<Breadcrumb[]>();
}
