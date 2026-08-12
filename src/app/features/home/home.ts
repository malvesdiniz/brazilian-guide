import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GENERAL_TIPS } from '../../data/general-tips.data';
import { GUIDE_SECTION_CARDS, HOME_HERO, HOW_TO_USE_STEPS } from '../../data/page-content.data';
import { GuideSectionCard } from '../../shared/components/guide-section-card/guide-section-card';
import { HeroSection } from '../../shared/components/hero-section/hero-section';
import { Icon } from '../../shared/components/icon/icon';
import { SectionHeading } from '../../shared/components/section-heading/section-heading';
import { TipsGrid } from '../../shared/components/tips-grid/tips-grid';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HeroSection, GuideSectionCard, TipsGrid, SectionHeading, Icon],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  protected readonly hero = HOME_HERO;
  protected readonly guideCards = GUIDE_SECTION_CARDS;
  protected readonly generalTips = GENERAL_TIPS;
  protected readonly howToUseSteps = HOW_TO_USE_STEPS;
}
