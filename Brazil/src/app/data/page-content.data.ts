import { GuideStep, GuideSectionCardContent, HeroContent } from '../shared/models';
import { IconName } from '../shared/utilities/icon-registry';

/**
 * Editable homepage and page-header copy. Update the text below to change
 * what visitors see — no component changes required.
 */

export const HOME_HERO: HeroContent = {
  eyebrow: 'A personal travel guide',
  title: 'Brazilian Tourist Guide',
  description:
    'Travel tips, illustrated maps and hand-picked places across Brazil, Ceará and Fortaleza.',
  image: '/img/hero-coast.jpg',
  imageAlt: 'Coastal landscape in Brazil with palm trees and turquoise water',
};

export const BRAZIL_HERO: HeroContent = {
  eyebrow: 'Country overview',
  title: 'A first look at Brazil',
  description:
    'A broad, sample selection of Brazilian destinations spanning cities, beaches, nature, culture, and adventure — meant to spark ideas rather than serve as a complete itinerary.',
  image: '/img/brazil.jpg',
  imageAlt: 'Aerial view of a Brazilian coastline',
};

export const CEARA_HERO: HeroContent = {
  eyebrow: 'State guide',
  title: 'Ceará: beaches, dunes, and coastal towns',
  description:
    'Ceará stretches along Brazil’s northeastern coast. This page introduces beaches and towns on the West and East Coasts around Fortaleza, organized for quick discovery and day-trip planning.',
  image: '/img/ceará.jpg',
  imageAlt: 'Sand dunes meeting the ocean in Ceará',
};

export const FORTALEZA_HERO: HeroContent = {
  eyebrow: 'City guide',
  title: 'Fortaleza, up close',
  description:
    'The most detailed section of this guide: neighborhoods, beaches, culture, food, and things to do at different times of day in Ceará’s capital.',
  image: '/img/fortaleza.jpg',
  imageAlt: 'Fortaleza city skyline along the beachfront',
};

/**
 * The three large cards on the homepage introducing each guide section.
 */
export const GUIDE_SECTION_CARDS: GuideSectionCardContent[] = [
  {
    guide: 'brazil',
    title: 'Brazil',
    description:
      'A country-wide overview with sample destinations across cities, beaches, nature, culture, and adventure.',
    image: '/img/brazil.jpg',
    imageAlt: 'Scenic view representing Brazil',
    routerLink: '/brazil',
    contentLabel: 'Country overview & sample destinations',
  },
  {
    guide: 'ceara',
    title: 'Ceará',
    description:
      'Beaches, dune landscapes, and coastal towns on the West and East Coasts, organized for easy discovery.',
    image: '/img/ceará.jpg',
    imageAlt: 'Scenic view representing Ceará',
    routerLink: '/ceara',
    contentLabel: 'Trip destinations on the same province',
  },
  {
    guide: 'fortaleza',
    title: 'Fortaleza',
    description:
      'A closer look at the city: neighborhoods, activities, food, and experiences by time of day.',
    image: '/img/fortaleza.jpg',
    imageAlt: 'Scenic view representing Fortaleza',
    routerLink: '/fortaleza',
    contentLabel: 'City attractions & activities',
  },
];

/**
 * "How to use this guide" steps shown on the homepage.
 */
export const HOW_TO_USE_STEPS: GuideStep[] = [
  {
    icon: 'map-pin',
    title: 'Browse by card or map',
    description:
      'Every destination appears both as a card and as a marker on an interactive map — use whichever feels more natural.',
  },
  {
    icon: 'filter',
    title: 'Filter to narrow things down',
    description:
      'Use the region and category filters on the Brazil, Ceará, and Fortaleza pages to focus on what interests you.',
  },
  {
    icon: 'compass',
    title: 'Open a destination for more detail',
    description:
      'Select a card or marker to see highlights, activities, practical tips, and a link to a full guide when one exists.',
  },
];

/**
 * Short West Coast vs East Coast comparison shown on the Ceará page.
 * Kept intentionally general — replace with your own impressions once
 * you've researched or visited both coasts.
 */
export const CEARA_COAST_COMPARISON: { title: string; description: string; icon: IconName }[] = [
  {
    title: 'West Coast',
    description:
      'often associated with dune landscapes, wind sports, and a mix of lively and quieter beach towns further from Fortaleza.',
    icon: 'compass',
  },
  {
    title: 'East Coast',
    description:
      'often associated with cliffside scenery and beach towns that can be reached as a day trip from Fortaleza.',
    icon: 'anchor',
  },
];

export const DISCLAIMER_TEXT =
  'This guide is a personal project put together for friends and is not an official or verified source. Details such as prices, opening hours, safety conditions, transport schedules, and travel rules can change. Please confirm current conditions, schedules, and official guidance before and during your trip.';
