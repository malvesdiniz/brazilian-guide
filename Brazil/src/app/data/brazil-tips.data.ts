import { TravelTip } from '../shared/models';

/**
 * Tips specific to traveling around Brazil at a national level.
 * General travel advice lives in general-tips.data.ts.
 *
 * --- Add new tips by appending objects to this array ---
 */
export const BRAZIL_TIPS: TravelTip[] = [
  {
    id: 'brazil-is-huge',
    title: 'Brazil is really, really big',
    summary: 'Do not plan your trip by looking at the map and assuming everything is close.',
    details: [
      `Brazil is enormous. Trying to “see Brazil” in one trip is a bit like trying to see Europe in one holiday — technically possible if your favorite activity is being inside airports.`,

      `A much better idea is to choose a few places that make sense together. Think about what kind of trip you want first — beaches, cities, nature, culture — and then look at destinations within the same region or with convenient connections.`,

      `Whenever you add a destination, check the actual travel time, not just how close it looks on the map. Brazil has a talent for making two dots that look suspiciously close turn into an entire travel day.`,
    ],
    icon: 'compass',
  },

  {
    id: 'domestic-flights',
    title: 'You will probably fly between regions',
    summary: 'For long distances, domestic flights are often the most practical option.',
    details: [
      `Brazil has a large domestic flight network, and flying is often the easiest way to move between distant regions.`,

      `Long-distance buses are also very common and can make sense for some routes, but do not underestimate the distances. An overnight bus in Brazil can mean a very, very long night.`,

      `Also remember that a “one-hour flight” does not mean one hour of your trip. Getting to the airport, arriving early, flying and getting into the next city can easily turn it into half a day. Leave room for travel days.`,

      `Some routes that look simple on the map may also require a connection through a larger airport, so always check the actual route before building your itinerary around it.`,
    ],
    icon: 'transport',
  },

  {
    id: 'five-regions',
    title: 'Brazil has five very different regions',
    summary:
      'Choosing a region is one of the easiest ways to decide what kind of Brazil you want to see.',
    details: [
      `<strong>North:</strong> the Amazon, enormous rivers, rainforest and some seriously large distances. This is the Brazil of huge landscapes, nature and places that can feel very remote.`,

      `<strong>Northeast:</strong> beaches, warm weather, strong local culture, music, food and some of the most famous coastline in the country. There are historic places too, especially in cities like Salvador, but for most travelers the big draw here is the coast and the culture. Ceará and Fortaleza are in this region.`,

      `<strong>Central-West:</strong> the Pantanal, wildlife, the cerrado and Brasília. This is a great region if nature, animals and open landscapes are more your thing than beaches or big cities.`,

      `<strong>Southeast:</strong> Rio de Janeiro, São Paulo, Minas Gerais and Espírito Santo. This region has a bit of everything: huge cities, beaches, mountains, nightlife, food and a lot of Brazil’s colonial and historic towns, especially in Minas Gerais.`,

      `<strong>South:</strong> cooler weather, different landscapes and a stronger European influence in parts of the region. It can feel quite different from the version of Brazil foreigners usually imagine — and, culturally, some places there are very proud of their European roots.`,
    ],
    icon: 'globe',
  },

  {
    id: 'think-in-hours',
    title: 'Think in hours, not kilometres',
    summary: 'Nearby on the map does not necessarily mean nearby in real life.',
    details: [
      `Road conditions, traffic, mountains, ferries and the sheer size of the country can make travel times very different from what you expect.`,

      `Always check the actual route before deciding that two places belong in the same day.`,

      `And if Google Maps says something is six hours away, please do not look at the map again and decide that it somehow feels more like three 😅.`,
    ],
    icon: 'time',
  },

  {
    id: 'choose-your-trip',
    title: 'Decide what kind of Brazil you want',
    summary: 'You do not need to visit every famous place just because it is famous.',
    details: [
      `Brazil can give you completely different trips depending on what you choose: beaches, big cities, rainforest, wildlife, mountains, colonial towns, food, nightlife or a combination of all of them.`,

      `Start with what you actually enjoy, then choose destinations around that. If your dream trip is mostly beaches and warm weather, there is no reason to spend half the holiday flying across the country just to tick off famous cities.`,

      `The map on this page is here to help with exactly that: explore the places, see where they are, and build a trip that makes geographic sense.`,
    ],
    icon: 'map',
  },

  {
    id: 'slow-down',
    title: 'Do less, enjoy more',
    summary: 'You do not need to collect Brazilian cities like Pokémon.',
    details: [
      `It is very tempting to keep adding destinations once you start looking at Brazil. Resist.`,

      `A few well-chosen places will usually make a much better trip than constantly packing, checking out, going to airports and arriving somewhere new.`,

      `Give yourself enough time to actually enjoy each destination — especially if part of the plan involves beaches, because aggressively scheduling relaxation rather defeats the purpose.`,
    ],
    icon: 'route',
  },
];
