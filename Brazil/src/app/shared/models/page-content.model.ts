import { IconName } from '../utilities/icon-registry';
import { GuideId } from './travel-destination.model';

export interface HeroContent {
  eyebrow?: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

export interface GuideSectionCardContent {
  guide: GuideId;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  routerLink: string;
  /** Short label describing what kind of content lives on that page, e.g. "Country overview & sample destinations". */
  contentLabel: string;
}

export interface GuideStep {
  title: string;
  description: string;
  icon: IconName;
}
