import { Coordinates } from './coordinates.model';

/**
 * Identifies which top-level guide a destination belongs to.
 * Used for breadcrumbs and "back to guide" links on the detail page.
 */
export type GuideId = 'brazil' | 'ceara' | 'fortaleza';

/**
 * Core content model for every destination shown across the site.
 * All fields except id/slug/name/shortDescription are optional so that
 * new destinations can be added with as much or as little detail as is
 * currently known.
 *
 * --- Add new destinations in the data files under src/app/data/ ---
 */
export interface DestinationQuickFacts {
  fromFortaleza?: string;
  airport?: string;
  weather?: string;
  suggestedStay?: string;
  bestFor?: string[];
}
export interface GalleryImage {
  src: string;
  alt: string;
}

export interface NearbyIdea {
  name: string;
  description?: string;
}

export interface ExternalGuide {
  label: string;
  url: string;
}

export interface TravelDestination {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription?: string;

  region?: string;
  category?: string;

  coordinates?: {
    lat: number;
    lng: number;
  };

  image?: string;
  imageAlt?: string;

  featured?: boolean;
  placesToVisit?: string[];
  quickFacts?: DestinationQuickFacts;

  pros?: string[];
  cons?: string[];

  personalTake?: string[];

  nearbyIdeas?: NearbyIdea[];

  gallery?: GalleryImage[];

  guideLinks?: DestinationGuideLink[];
  externalUrl?: string;

  lastUpdated?: string;

  guide: 'brazil' | 'ceara' | 'fortaleza';
}
export interface DestinationGuideLink {
  label: string;
  url: string;
}
/** A destination enriched with the guide it belongs to, used by the detail page. */
export interface TravelDestinationWithGuide extends TravelDestination {
  guide: GuideId;
}
