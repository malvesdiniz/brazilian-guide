import { TravelDestination } from '../shared/models';

/**
 * Sample Fortaleza attractions and neighborhoods shown on the /fortaleza page.
 * This page is more detailed and activity-focused than the Brazil and Ceará
 * pages, so entries here make more use of activities, practicalTips, and
 * suggestedTimeOfDay.
 *
 * The "region" field holds the neighborhood or area name.
 * The "category" field is used for activity filtering, e.g.:
 * "Beaches" | "Culture" | "Food" | "Nightlife" | "Nature" | "Shopping" | "Daytime activities" | "Evening activities"
 *
 * --- Add new Fortaleza destinations by appending objects to this array ---
 */
export const FORTALEZA_DESTINATIONS: TravelDestination[] = [
  //   {
  //     id: 'fortaleza-praia-de-iracema',
  //     slug: 'praia-de-iracema',
  //     name: 'Praia de Iracema',
  //     shortDescription: 'A beachfront neighborhood known for its arts scene and evening energy.',
  //     fullDescription:
  //       'Sample content: Praia de Iracema mixes a historic beachfront with bars, live music, and cultural venues. A common starting point for an evening out in Fortaleza.',
  //     region: 'Praia de Iracema',
  //     category: 'Evening activities',
  //     coordinates: { lat: -3.7219, lng: -38.5133 },
  //     image: '/images/destinations/fortaleza/praia-de-iracema.jpg',
  //     imageAlt: 'Beachfront promenade at Praia de Iracema in the evening',
  //     highlights: ['Beachfront promenade', 'Live music venues', 'Cultural landmarks nearby'],
  //     activities: ['Evening walks', 'Live music', 'Waterfront dining'],
  //     practicalTips: ['Placeholder: this area is generally busier in the evening than during the day.'],
  //     suggestedTimeOfDay: 'Evening',
  //     featured: true
  //   },
  //   {
  //     id: 'fortaleza-dragao-do-mar',
  //     slug: 'dragao-do-mar',
  //     name: 'Dragão do Mar Center of Art and Culture',
  //     shortDescription: 'A cultural complex with museums, cinema, and planetarium.',
  //     region: 'Praia de Iracema',
  //     category: 'Culture',
  //     coordinates: { lat: -3.7256, lng: -38.5147 },
  //     image: '/images/destinations/fortaleza/dragao-do-mar.jpg',
  //     imageAlt: 'Cultural center architecture at Dragão do Mar',
  //     highlights: ['Museums and galleries', 'Planetarium', 'Cinema and event spaces'],
  //     activities: ['Museum visits', 'Planetarium shows'],
  //     practicalTips: ['Placeholder: confirm current exhibit schedules before visiting.'],
  //     suggestedTimeOfDay: 'Afternoon'
  //   },
  //   {
  //     id: 'fortaleza-meireles',
  //     slug: 'meireles-beira-mar',
  //     name: 'Meireles & Beira-Mar Avenue',
  //     shortDescription: 'A long beachfront avenue with a nightly craft market.',
  //     region: 'Meireles',
  //     category: 'Daytime activities',
  //     coordinates: { lat: -3.7312, lng: -38.4989 },
  //     image: '/images/destinations/fortaleza/meireles.jpg',
  //     imageAlt: 'Beira-Mar Avenue along the coast in Meireles',
  //     highlights: ['Long beachfront promenade', 'Nightly craft market', 'Coastal views'],
  //     activities: ['Walking or cycling the promenade', 'Craft market browsing', 'Beach time'],
  //     practicalTips: ['Placeholder: the promenade is popular for both morning exercise and evening strolls.'],
  //     suggestedTimeOfDay: 'Morning or evening'
  //   },
  //   {
  //     id: 'fortaleza-centro',
  //     slug: 'centro',
  //     name: 'Centro (Historic Center)',
  //     shortDescription: "Fortaleza's historic core, with landmark buildings and markets.",
  //     region: 'Centro',
  //     category: 'Culture',
  //     coordinates: { lat: -3.7275, lng: -38.5275 },
  //     image: '/images/destinations/fortaleza/centro.jpg',
  //     imageAlt: 'Historic architecture in downtown Fortaleza',
  //     highlights: ['Historic landmarks', 'Theatre and cathedral', 'Traditional markets'],
  //     activities: ['Walking tours', 'Landmark visits'],
  //     practicalTips: ['Placeholder: this area is typically busiest on weekdays during business hours.'],
  //     suggestedTimeOfDay: 'Daytime'
  //   },
  //   {
  //     id: 'fortaleza-mercado-central',
  //     slug: 'mercado-central',
  //     name: 'Mercado Central',
  //     shortDescription: 'A large multi-level market for crafts, hammocks, and souvenirs.',
  //     region: 'Centro',
  //     category: 'Shopping',
  //     coordinates: { lat: -3.7281, lng: -38.5261 },
  //     image: '/images/destinations/fortaleza/mercado-central.jpg',
  //     imageAlt: 'Stalls inside Mercado Central in Fortaleza',
  //     highlights: ['Local crafts and souvenirs', 'Multiple floors of vendors'],
  //     activities: ['Souvenir shopping', 'Browsing local crafts'],
  //     practicalTips: ['Placeholder: confirm current opening days and hours before visiting.'],
  //     suggestedTimeOfDay: 'Daytime'
  //   },
  //   {
  //     id: 'fortaleza-varjota',
  //     slug: 'varjota',
  //     name: 'Varjota',
  //     shortDescription: 'A neighborhood known for its concentration of restaurants and bars.',
  //     region: 'Varjota',
  //     category: 'Food',
  //     coordinates: { lat: -3.7364, lng: -38.4886 },
  //     image: '/images/destinations/fortaleza/varjota.jpg',
  //     imageAlt: 'Restaurant street in Varjota, Fortaleza',
  //     highlights: ['High concentration of restaurants', 'Relaxed evening atmosphere'],
  //     activities: ['Dining out', 'Evening walks'],
  //     practicalTips: ['Placeholder: this is a residential-feeling area — reservations may be worth checking.'],
  //     suggestedTimeOfDay: 'Evening'
  //   },
  //   {
  //     id: 'fortaleza-praia-do-futuro',
  //     slug: 'praia-do-futuro',
  //     name: 'Praia do Futuro',
  //     shortDescription: 'A wide beach known for beach clubs and structured beachfront dining.',
  //     region: 'Praia do Futuro',
  //     category: 'Beaches',
  //     coordinates: { lat: -3.7378, lng: -38.4453 },
  //     image: '/images/destinations/fortaleza/praia-do-futuro.jpg',
  //     imageAlt: 'Wide sandy beach at Praia do Futuro',
  //     highlights: ['Wide open beach', 'Beach clubs along the shore', 'Structured beachfront dining'],
  //     activities: ['Beach time', 'Beach club visits', 'Swimming'],
  //     practicalTips: ['Placeholder: research current beach club access and any entry expectations.'],
  //     suggestedTimeOfDay: 'Daytime'
  //   },
  //   {
  //     id: 'fortaleza-parque-do-coco',
  //     slug: 'parque-do-coco',
  //     name: 'Parque do Cocó',
  //     shortDescription: "One of Latin America's largest urban parks, with mangrove trails.",
  //     region: 'Cocó',
  //     category: 'Nature',
  //     coordinates: { lat: -3.7581, lng: -38.4831 },
  //     image: '/images/destinations/fortaleza/parque-do-coco.jpg',
  //     imageAlt: 'Mangrove and trail scenery in Parque do Cocó',
  //     highlights: ['Mangrove ecosystem', 'Walking and cycling trails', 'Green space within the city'],
  //     activities: ['Walking', 'Cycling', 'Birdwatching'],
  //     practicalTips: ['Placeholder: mornings are typically cooler and quieter for a visit.'],
  //     suggestedTimeOfDay: 'Morning'
  //   }
  // --- Add new Fortaleza destinations above this line ---
];
