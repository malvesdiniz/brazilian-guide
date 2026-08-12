import { Injectable } from '@angular/core';
import { BRAZIL_DESTINATIONS } from '../data/brazil-destinations.data';
import { CEARA_DESTINATIONS } from '../data/ceara-destinations.data';
import { FORTALEZA_DESTINATIONS } from '../data/fortaleza-destinations.data';
import { GuideId, TravelDestination, TravelDestinationWithGuide } from '../shared/models';

/**
 * Reads destination content from the static data files in src/app/data/.
 * Adding a new destination there automatically makes it available through
 * every method here — no other code needs to change.
 */
@Injectable({ providedIn: 'root' })
export class DestinationService {
  private readonly byGuide: Record<GuideId, readonly TravelDestination[]> = {
    brazil: BRAZIL_DESTINATIONS,
    ceara: CEARA_DESTINATIONS,
    fortaleza: FORTALEZA_DESTINATIONS
  };

  private readonly all: readonly TravelDestinationWithGuide[] = (
    Object.keys(this.byGuide) as GuideId[]
  ).flatMap((guide) => this.byGuide[guide].map((destination) => ({ ...destination, guide })));

  getAllDestinations(): readonly TravelDestinationWithGuide[] {
    return this.all;
  }

  getBrazilDestinations(): readonly TravelDestination[] {
    return this.byGuide.brazil;
  }

  getCearaDestinations(): readonly TravelDestination[] {
    return this.byGuide.ceara;
  }

  getFortalezaDestinations(): readonly TravelDestination[] {
    return this.byGuide.fortaleza;
  }

  getDestinationsByGuide(guide: GuideId): readonly TravelDestination[] {
    return this.byGuide[guide];
  }

  getDestinationBySlug(slug: string): TravelDestinationWithGuide | undefined {
    return this.all.find((destination) => destination.slug === slug);
  }

  getDestinationsByRegion(region: string, guide?: GuideId): readonly TravelDestination[] {
    const source = guide ? this.byGuide[guide] : this.all;
    return source.filter((destination) => destination.region === region);
  }

  getDestinationsByCategory(category: string, guide?: GuideId): readonly TravelDestination[] {
    const source = guide ? this.byGuide[guide] : this.all;
    return source.filter((destination) => destination.category === category);
  }

  getFeaturedDestinations(guide?: GuideId): readonly TravelDestination[] {
    const source = guide ? this.byGuide[guide] : this.all;
    return source.filter((destination) => destination.featured);
  }

  /** Unique, data-derived list of regions present for a given guide, in first-seen order. */
  getRegions(guide: GuideId): string[] {
    return this.uniqueInOrder(this.byGuide[guide].map((d) => d.region));
  }

  /** Unique, data-derived list of categories present for a given guide, in first-seen order. */
  getCategories(guide: GuideId): string[] {
    return this.uniqueInOrder(this.byGuide[guide].map((d) => d.category));
  }

  private uniqueInOrder(values: (string | undefined)[]): string[] {
    const seen = new Set<string>();
    const result: string[] = [];
    for (const value of values) {
      if (value && !seen.has(value)) {
        seen.add(value);
        result.push(value);
      }
    }
    return result;
  }
}
