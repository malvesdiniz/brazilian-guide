import { ChangeDetectionStrategy, Component, computed, effect, inject, input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { MAP_VIEWS } from '../../core/config/map.config';
import { DestinationService } from '../../services/destination.service';
import { Breadcrumb } from '../../shared/models';
import { AppImage } from '../../shared/components/app-image/app-image';
import { Breadcrumbs } from '../../shared/components/breadcrumbs/breadcrumbs';
import { EmptyState } from '../../shared/components/empty-state/empty-state';
import { ExternalGuideButton } from '../../shared/components/external-guide-button/external-guide-button';
import { Icon } from '../../shared/components/icon/icon';
import { InteractiveMap } from '../../shared/components/interactive-map/interactive-map';
import { categoryIcon } from '../../shared/utilities/category-icon';
import { GUIDE_META } from '../../shared/utilities/guide-meta';

/**
 * Reusable detail page for any destination from Brazil, Ceará, or
 * Fortaleza. The :slug route param is bound directly to `slug` via
 * withComponentInputBinding() in app.config.ts.
 */
@Component({
  selector: 'app-destination-detail',
  standalone: true,
  imports: [RouterLink, AppImage, EmptyState, Icon],
  templateUrl: './destination-detail.html',
  styleUrl: './destination-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DestinationDetail {
  private readonly destinationService = inject(DestinationService);
  private readonly titleService = inject(Title);

  readonly slug = input<string>();

  protected readonly destination = computed(() =>
    this.destinationService.getDestinationBySlug(this.slug() ?? ''),
  );

  protected readonly categoryIconName = computed(() => categoryIcon(this.destination()?.category));

  protected readonly guideMeta = computed(() => {
    const destination = this.destination();
    return destination ? GUIDE_META[destination.guide] : undefined;
  });

  protected readonly breadcrumbs = computed<Breadcrumb[]>(() => {
    const destination = this.destination();
    const guideMeta = this.guideMeta();
    if (!destination || !guideMeta) {
      return [{ label: 'Home', routerLink: '/' }];
    }
    return [
      { label: 'Home', routerLink: '/' },
      { label: guideMeta.label, routerLink: guideMeta.path },
      { label: destination.name },
    ];
  });

  protected readonly mapView = computed(() => {
    const destination = this.destination();
    return destination ? MAP_VIEWS[destination.guide] : MAP_VIEWS.brazil;
  });

  constructor() {
    effect(() => {
      const destination = this.destination();
      this.titleService.setTitle(
        destination
          ? `${destination.name} | Brazilian Tourist Guide`
          : 'Destination not found | Brazilian Tourist Guide',
      );
    });
  }
}
