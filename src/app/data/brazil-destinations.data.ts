import { TravelDestination } from '../shared/models';

/**
 * Sample Brazil destinations shown on the /brazil page.
 *
 * This is intentionally a broad, country-wide overview rather than a
 * detailed itinerary — just enough to make a visitor aware a place exists.
 * Descriptions are clearly-labelled placeholder content: replace them with
 * your own research as you go.
 *
 * Regions used for filtering: "North" | "Northeast" | "Central-West" | "Southeast" | "South"
 * Categories used for filtering: "City" | "Beach" | "Nature" | "Culture" | "Adventure"
 *
 * --- Add new Brazil destinations by appending objects to this array ---
 */
export const BRAZIL_DESTINATIONS: TravelDestination[] = [
  {
    id: 'brazil-rio-de-janeiro',
    slug: 'rio-de-janeiro',
    name: 'Rio de Janeiro',

    shortDescription: 'A city where beaches, mountains, forest and urban life all seem to collide.',

    fullDescription: `
Rio is one of those cities where the setting is part of the experience. Mountains, beaches, forest and dense urban neighborhoods sit right next to each other, so even moving around the city can feel scenic.

It is Brazil’s second-largest city and one of the country’s best-known destinations internationally, so expect a proper big-city experience rather than just a beach town.

Rio is also one of Brazil’s most historically important cities. It served as the country’s capital for almost two centuries, and the Portuguese royal family established itself there in the early 19th century. Because of that, you will find a mix of beaches, modern city life, museums, historic buildings and older neighborhoods all in the same place.

One of the things that makes Rio interesting is that you can build very different trips around it. You can spend a few days exploring the city itself, or stay longer and combine it with beaches, islands and coastal towns around the state.

If you are visiting in July or August, remember that it is winter in Rio. The weather is generally mild, but beach conditions can vary. The ocean in August averages around 22°C, so some days it may feel perfectly fine for swimming and on others surprisingly cold — especially compared with the Northeast.
`,
    region: 'Southeast',
    category: 'City',
    guide: 'brazil',

    coordinates: {
      lat: -22.9068,
      lng: -43.1729,
    },

    image: '/img/rio-de-janeiro.jpg',
    imageAlt: 'Rio de Janeiro coastline with mountains in the background',

    quickFacts: {
      fromFortaleza: 'Approx. 3h30 by direct flight',
      airport: 'GIG or SDU',
      weather: 'Mild winter, usually warm during the day',
      suggestedStay: '3–5 days',
      bestFor: ['Beaches', 'Nature', 'City life', 'Views', 'History'],
    },

    pros: [
      'Probably one of Brazil’s most visually impressive cities',
      'Beaches, mountains and city life all in one place',
      'Easy to mix nature, sightseeing and nightlife',
      'Plenty to see beyond the classic postcard attractions',
    ],

    cons: [
      'It can feel chaotic, especially during busy periods',
      'Traffic can take up a surprising amount of time',
      'You need to pay a bit more attention to where and when you walk',
      'People tend to either love Rio or really not love Rio',
    ],
    placesToVisit: [
      'Christ the Redeemer',
      'Sugarloaf Mountain',
      'Copacabana',
      'Ipanema',
      'Arpoador',
      'Santa Teresa',
      'Lapa',
      'Historic city center',
      'Botanical Garden',
      'Tijuca National Park',
    ],

    personalTake: [
      `I have actually been to Rio, although I went during Covid, so it was probably much quieter than usual.`,

      `Personally, I thought the city was beautiful. What I liked most was how everything seems to exist on top of each other — city, mountains, beaches and greenery. It gives Rio a really special energy.`,

      `I know Brazilians who absolutely love Rio and others who cannot stand it, so this one really comes down to personal taste.`,

      `August should also be calmer than peak summer and Carnival season, which I personally think is a plus if you actually want to explore the city.`,
    ],

    nearbyIdeas: [
      {
        name: 'Ilha Grande',
        description:
          'A good option if you want to combine Rio with beaches, hiking and a slower island atmosphere.',
      },
      {
        name: 'Paraty',
        description:
          'A historic coastal town that works very well as part of a longer trip south of Rio.',
      },
      {
        name: 'Região dos Lagos',
        description:
          'Beach destinations such as Búzios and Arraial do Cabo if you want to extend the coastal part of the trip.',
      },
      {
        name: 'Búzios',
        description: 'A popular beach-town option if you want to extend the trip along the coast.',
      },
    ],

    // externalGuide: {
    //   label: 'Read a complete Rio de Janeiro guide',
    //   url: '',
    // },

    guideLinks: [
      {
        label: 'The Ultimate Rio de Janeiro Itinerary + Travel Guide',
        url: 'https://www.lauratheexplorer.co.nz/blog/ultimate-rio-de-janeiro-itinerary-best-things-to-to',
      },
      {
        url: 'https://www.tripbase.com/destinations/rio-de-janeiro-brazil/',
        label: 'Tripbase: Rio de Janeiro Travel Guide',
      },
      {
        label: 'Rio de Janeiro Travel Guide',
        url: 'https://example.com/rio-de-janeiro-guide',
      },
    ],

    featured: true,
  },
  {
    id: 'brazil-sao-paulo',
    slug: 'sao-paulo',
    name: 'São Paulo',

    shortDescription:
      'Brazil’s biggest city — intense, cosmopolitan and full of food, culture, business and nightlife.',

    fullDescription: `
São Paulo is Brazil’s largest city and one of the biggest urban centers in the world. It is a huge, fast-paced and extremely cosmopolitan place, where you will find people from all over Brazil and communities from many different parts of the world.

In many ways, São Paulo is the country’s main business and economic center, but there is much more to it than offices and skyscrapers. The city has an enormous food scene, museums, art, concerts, nightlife, shopping and pretty much every kind of urban activity you can imagine. If something exists in Brazil, there is a good chance São Paulo has a version of it.

At the same time, this is probably not the Brazil most of you are imagining when you think about this trip. There are no tropical beaches around the corner and the pace is very different from the Northeast. São Paulo is faster, denser and much more intense.

August is winter here. Average temperatures are roughly 25°C during the day and 14°C at night, so you can get very pleasant sunny days but also genuinely cool mornings and evenings. Bring a jacket — this is one of the places where “Brazil = permanently hot” definitely does not apply.

One very practical advantage for you: there is now a direct LATAM flight between Brussels and São Paulo. That makes the city an interesting option either as your first stop in Brazil or as the place where you arrive before continuing elsewhere.
`,

    region: 'Southeast',
    category: 'City',
    guide: 'brazil',

    coordinates: {
      lat: -23.5505,
      lng: -46.6333,
    },

    image: '/img/sao-paulo.jpg',
    imageAlt: 'São Paulo skyline',

    quickFacts: {
      fromFortaleza: 'Approx. 3h30 by direct flight',
      airport: 'GRU or CGH',
      weather: 'Around 25°C daytime / 14°C at night in August',
      suggestedStay: '2–4 days',
      bestFor: ['Food', 'Nightlife', 'Museums', 'Culture', 'Big-city life'],
    },

    pros: [
      'Direct flights from Brussels with LATAM',
      'Probably the strongest food scene in Brazil',
      'Huge selection of museums, concerts, nightlife and events',
      'Extremely multicultural and cosmopolitan',
      'One of the easiest places in Brazil for onward domestic flights',
    ],

    cons: [
      'Very large, busy and chaotic',
      'Traffic can consume a surprising amount of your day',
      'It does not really give you the classic beaches-and-tropical-Brazil experience',
      'Can feel overwhelming if huge cities are not your thing',
      'August nights can be much cooler than you might expect from Brazil',
    ],

    placesToVisit: [
      'Avenida Paulista',
      'MASP',
      'Ibirapuera Park',
      'Liberdade',
      'Pinacoteca',
      'Mercado Municipal',
      'Vila Madalena',
      'Beco do Batman',
    ],

    personalTake: [
      `I have been to São Paulo, but only for a very short trip — I arrived on a Monday and left on Friday. So, very important disclaimer: I did not experience São Paulo nightlife at all, which is supposedly one of the things the city does best.`,

      `Personally, São Paulo was not really my thing. I found it very chaotic, very intense and just... a lot. But I also know that this is exactly what some people love about it. It is incredibly cosmopolitan, you meet people from everywhere, and there is genuinely always something happening.`,

      `The energy also feels quite different from what I am used to in the Northeast. São Paulo is much faster and more efficiency-driven. Rio, for example, can also be chaotic, but it still has a more relaxed beach-and-mountains feeling. São Paulo feels much more like a giant global metropolis.`,

      `I also need to admit that I am probably biased here because huge cities are simply not my favorite kind of holiday. A Belgian or another European might actually find São Paulo much more interesting than I did, especially if you enjoy food, culture, nightlife and that big-city energy.`,

      `There are Brazilians who think São Paulo is the best place in the country and others who would happily never go there again. So, much like Rio, this one is very personal — although Rio and São Paulo are completely different experiences.`,

      `Would I personally add São Paulo to my holiday itinerary? Probably not. But if you are curious about it, or if you are already flying through São Paulo anyway, it can be very easy to include for a couple of days.`,
    ],

    nearbyIdeas: [
      {
        name: 'Rio de Janeiro',
        description:
          'São Paulo and Rio are relatively easy to combine. Flights are very short, and overnight buses are another option if you would rather save a hotel night.',
      },
      {
        name: 'Ilhabela',
        description:
          'A coastal island option if you want to escape the city and add beaches to the same trip.',
      },
    ],

    guideLinks: [
      {
        url: 'https://www.nomadicmatt.com/travel-guides/brazil-travel-tips/sao-paulo/',
        label: 'Nomadic Matt: São Paulo Travel Guide',
      },
      {
        url: 'https://www.tripbase.com/destinations/sao-paulo-brazil/',
        label: 'Tripbase: São Paulo Travel Guide',
      },
    ],

    featured: false,
  },
  {
    id: 'brazil-salvador',
    slug: 'salvador',
    name: 'Salvador',

    shortDescription:
      'A historic coastal city where Afro-Brazilian culture, music, food, beaches and some of the country’s oldest history come together.',

    fullDescription: `
Salvador is one of the most culturally distinctive cities in Brazil and one of the places where you can most clearly see how the country was formed.

It was Brazil’s first capital, from 1549 to 1763, and became one of the main centers of the colonial sugar economy and the transatlantic slave trade. Because of that history, Salvador developed an extremely strong African and Afro-Brazilian identity that is still visible everywhere today — in the food, music, religion, language, festivals and everyday life of the city.

Today, Salvador is widely considered one of the main centers of Afro-Brazilian culture. You will come across traditions connected to capoeira, Candomblé, acarajé, samba, axé and Afro-Brazilian percussion, all of which give the city a cultural identity that feels very different even from places such as Rio de Janeiro.

The historic side is another big part of the experience. Pelourinho and the surrounding historic center preserve colonial buildings, churches, colorful houses and streets dating back centuries. Salvador was one of the first major urban centers of Portuguese Brazil, so if you want to see architecture and places connected to the earliest periods of Brazilian history, this is one of the most interesting destinations on the list.

At the same time, Salvador is still a large modern coastal city. You have beaches, nightlife, restaurants, music, busy neighborhoods and the huge Baía de Todos os Santos alongside the historic center.

Fun fact: Michael Jackson filmed part of the Brazil version of “They Don’t Care About Us” in Pelourinho, together with the Salvador percussion group Olodum.

If you are coming from Fortaleza, Salvador can be especially interesting because it gives you something quite different without leaving the Northeast: you still get warm weather and the coast, but with much more visible colonial history and a very different cultural identity.
`,

    region: 'Northeast',
    category: 'Culture',
    guide: 'brazil',

    coordinates: {
      lat: -12.9777,
      lng: -38.5016,
    },

    image: '/img/salvador.jpg',
    imageAlt: 'Colorful colonial buildings in Salvador’s historic center',

    quickFacts: {
      fromFortaleza: 'Approx. 2h by direct flight',
      airport: 'SSA — Salvador Bahia Airport',
      weather: 'Warm in August, usually around the mid-20s °C',
      suggestedStay: '3–4 days',
      bestFor: ['Afro-Brazilian culture', 'History', 'Music', 'Food', 'Beaches', 'Architecture'],
    },

    pros: [
      'One of the richest cultural experiences on this list',
      'A great mix of history, beaches, music and city life',
      'Very different cultural atmosphere from Fortaleza',
      'Excellent if you want to understand more about Afro-Brazilian culture',
      'A relatively easy addition if you want to stay within the Northeast',
    ],

    cons: [
      'It is still a large Brazilian city, so traffic and safety awareness matter',
      'Some parts of the historic center can feel very touristy',
      'In very touristy areas, especially around the historic center, you may come across people offering bracelets, souvenirs or other things that seem free and then asking for money afterwards. The easiest approach is simply not to accept things you did not ask for. It can be annoying, but it is also the kind of tourist hustle you can find in many major destinations.',
      'August can still bring some rain',
      'The city can feel intense and busy if you prefer very quiet destinations',
    ],

    placesToVisit: [
      'Pelourinho',
      'Elevador Lacerda',
      'Mercado Modelo',
      'Farol da Barra',
      'Porto da Barra',
      'Igreja do Bonfim',
      'Rio Vermelho',
      'Casa do Carnaval da Bahia',
      'MUNCAB — Museu Nacional da Cultura Afro-Brasileira',
      'Baía de Todos os Santos',
    ],

    personalTake: [
      `I have been to Salvador and I personally really liked it. The city has a very good energy, and it felt quite different from Fortaleza even though both are large northeastern coastal cities.`,

      `One of the things I liked most was that Salvador has a much more visible historical layer. Fortaleza is a much younger city, so you do not really walk around seeing centuries of colonial architecture. In Salvador, that older history is right in front of you — churches, colorful buildings, old streets and places connected to the beginning of colonial Brazil.`,

      `That gives Salvador a kind of charm that Fortaleza does not really have. There is a stronger feeling of history and, in some ways, an even more immediately visible cultural identity.`,

      `The Afro-Brazilian side was also one of the most interesting parts for me. You can really feel that the music, food, religion, architecture and general atmosphere of the city come from a different cultural mix than what I am used to in Ceará.`,

      `I also thought Salvador was beautiful and everyone I interacted with was very friendly. Of course, my experience as a Brazilian Portuguese speaker may be different from yours as visitors from Europe, but I personally had nothing to complain about.`,

      `And, most importantly, Salvador has the best accent in Brazil. This is completely objective and definitely not up for debate.`,
    ],

    nearbyIdeas: [
      {
        name: 'Morro de São Paulo',
        description:
          'A popular island-style destination if you want to combine Salvador with beaches and a slower pace.',
      },
      {
        name: 'Praia do Forte',
        description:
          'An easy coastal extension north of Salvador with beaches and a much more relaxed atmosphere.',
      },
      {
        name: 'Chapada Diamantina',
        description:
          'A completely different option inland if you want mountains, waterfalls and hiking instead of more beaches.',
      },
    ],

    guideLinks: [
      {
        label: 'Salvador: The First Capital of Brazil',
        url: 'https://postcardfromtaylor.com/salvador-the-first-capital-of-brazil/',
      },
      {
        label: 'World Nomads — Salvador Ultimate City Guide',
        url: 'https://www.worldnomads.com/explore/south-america/brazil/salvador-ultimate-city-guide',
      },
      {
        label: 'Tripbase — Salvador Travel Guide',
        url: 'https://www.tripbase.com/destinations/salvador-brazil/',
      },
    ],

    featured: true,
  },
  {
    id: 'brazil-fernando-de-noronha',
    slug: 'fernando-de-noronha',
    name: 'Fernando de Noronha',

    shortDescription:
      'A remote paradise island known for crystal-clear water, dramatic beaches and incredible marine life.',

    fullDescription: `
Fernando de Noronha is one of Brazil’s most famous nature destinations and probably one of the closest things to a true paradise-island experience in the country.

The archipelago is protected, relatively remote and much smaller than the other destinations on this list. This is not the place for big-city life, endless nightlife or a packed urban itinerary. People usually come here to slow down, spend time at the beach, explore the island and enjoy the natural environment.

The marine life is a huge part of the experience. Depending on the activity and conditions, you may see sea turtles, rays, reef fish, dolphins and sharks. Snorkeling, diving and boat trips are some of the main reasons people travel here.

The beaches and landscapes are also very different from a normal coastal city. You have volcanic cliffs, clear water, protected bays and relatively undeveloped scenery, which is part of what makes the island feel so special.

There is tourism infrastructure, accommodation, restaurants and organized activities, but do not expect the variety or convenience of a large city such as Rio or São Paulo. Noronha is much more about nature, beaches and a slower island rhythm.

August is generally a very good time to visit. It falls within the drier part of the year, temperatures remain warm, and conditions are usually good for beaches and outdoor activities.
`,

    region: 'Northeast',
    category: 'Nature',
    guide: 'brazil',

    coordinates: {
      lat: -3.8536,
      lng: -32.4297,
    },

    image: '/img/fernando-de-noronha.jpg',
    imageAlt: 'Turquoise water and cliffs at Fernando de Noronha',

    quickFacts: {
      fromFortaleza:
        'There is currently no direct flight — the usual route involves a connection, often through Recife',
      airport: 'FEN — Fernando de Noronha Airport',
      weather: 'Warm and relatively dry in August, around 29°C during the day',
      suggestedStay: '3–5 days',
      bestFor: ['Beaches', 'Snorkeling', 'Diving', 'Marine life', 'Nature', 'Relaxing'],
    },

    pros: [
      'Some of the most spectacular beaches and scenery in Brazil',
      'Excellent snorkeling, diving and marine life',
      'Perfect if you want a quieter, paradise-island experience',
      'Very different from the big-city destinations on this list',
      'August is generally a very good time to visit',
    ],

    cons: [
      'There is currently no direct flight from Fortaleza, so getting there normally requires a connection — often through Recife — which makes the trip longer than it looks',
      'It is significantly more expensive than most beach destinations in Brazil',
      'Environmental fees and access rules apply because the archipelago is protected',
      'The island is small, so do not expect the variety of restaurants, nightlife or entertainment you would find in a major city',
      'Some activities and beaches may require planning or advance booking',
    ],

    placesToVisit: [
      'Baía do Sancho',
      'Baía dos Porcos',
      'Praia do Leão',
      'Baía dos Golfinhos',
      'Mirante Dois Irmãos',
      'Praia da Conceição',
      'Praia do Cachorro',
      'Projeto Tamar',
    ],

    personalTake: [
      `I have never been to Fernando de Noronha myself, so I cannot give you a proper first-hand review.`,

      `That said, pretty much everyone I know who has been there talks about it as one of the most beautiful places they have ever visited. I have heard that consistently enough that I am inclined to believe the hype. I also have a cousin who has been there to visit and never came back (she didn't die, she just moved there!).`,

      `To me, this is the option for someone who wants something genuinely special and is happy to spend a bit more time and money to get there. If your idea of a holiday is clear water, beautiful beaches, marine life and doing absolutely nothing in a very pretty place, this is probably one of the strongest options on the list.`,
    ],

    guideLinks: [
      {
        label: 'Fernando de Noronha — Essential First-Timer’s Guide',
        url: 'https://www.blumar.com.br/blog/post.php/trip-to-fernando-de-noronha-the-essential-first-timer-s-guide',
      },
      {
        label: 'Fernando de Noronha — Ultimate Travel Guide',
        url: 'https://www.thetravelinpink.com/fernando-de-noronha-brazil-ultimate-travel-guide-to-a-paradise-island/',
      },
    ],

    featured: true,
  },
  {
    id: 'brazil-amazon-manaus',
    slug: 'manaus-amazon',
    name: 'Manaus & the Amazon',

    shortDescription:
      'The main gateway to the Brazilian Amazon — huge rivers, rainforest, wildlife and a completely different side of Brazil.',

    fullDescription: `
Manaus is the main starting point for exploring the Brazilian Amazon. It is a large city in the middle of the rainforest, but the important thing to understand is that visiting Manaus and visiting the Amazon are not exactly the same thing.

Manaus itself is worth seeing. The city grew dramatically during the rubber boom and still has reminders of that period, including the famous Teatro Amazonas. You can also visit markets, museums and the Meeting of the Waters, where the dark Rio Negro and the lighter Solimões River flow side by side before forming the Amazon River.

But if you are traveling all the way there, I would seriously consider spending at least part of the trip outside the city. The Amazon experience most people imagine usually means boat trips, rainforest lodges, riverside communities, wildlife, flooded forests and spending time much closer to nature.

One option is Novo Airão, around 2.5 hours from Manaus, which is commonly used as a base for exploring Anavilhanas National Park. The area is a huge river archipelago with hundreds of islands, channels and flooded forests. Depending on the season, you can explore by boat, walk in the forest, visit river beaches and look for wildlife.

Wildlife is obviously a big part of the attraction, although this is not a zoo and nothing is guaranteed. Depending on where you go and what tours you choose, you may encounter monkeys, caimans, birds, pink river dolphins, sloths and an enormous variety of fish and insects.

August is an interesting transition period. It is still within the wetter part of the Amazon cycle, so water levels can remain relatively high and some flooded-forest experiences may still be possible. The weather stays hot and humid — this is not a destination where Brazilian winter means bringing a coat.

One thing you should plan before coming here is health protection. The Amazon region is a yellow-fever risk area, and Brazilian health authorities recommend yellow-fever vaccination for travelers going there. If you need the vaccine, get it at least 10 days before the trip. It is also a good moment to check that your routine vaccines are up to date and ask your doctor or travel clinic whether anything else is recommended for your specific itinerary.

And yes: bring serious mosquito repellent. This is one part of the trip where “I’ll just buy some when I get there” is not my preferred strategy.
`,

    region: 'North',
    category: 'Nature',
    guide: 'brazil',

    coordinates: {
      lat: -3.119,
      lng: -60.0217,
    },

    image: '/img/amazonia.jpg',
    imageAlt: 'Amazon rainforest and Rio Negro near Manaus',

    quickFacts: {
      fromFortaleza: 'Direct flights may be available; otherwise expect a connection',
      airport: 'MAO — Eduardo Gomes International Airport',
      weather: 'Hot and humid in August, generally around 30°C during the day',
      suggestedStay: '4–7 days if you want time outside Manaus',
      bestFor: ['Rainforest', 'Wildlife', 'Boat trips', 'Nature', 'Adventure', 'Local culture'],
    },

    pros: [
      'A completely different side of Brazil from the coast and major southern cities',
      'One of the most unique natural environments you can experience in the country',
      'Excellent if wildlife, rivers and rainforest are more interesting to you than beaches',
      'You can combine Manaus with a jungle lodge or places such as Novo Airão and Anavilhanas',
      'It can be surprisingly accessible once you reach Manaus',
    ],

    cons: [
      'Heat, humidity and mosquitoes are very real',
      'You should plan vaccines and health precautions before the trip',
      'The quality of the experience depends a lot on the lodge, tour or guide you choose',
      'Internet can become limited once you leave the cities and larger lodges',
      'It takes more planning than simply arriving in a city and exploring on your own',
    ],

    placesToVisit: [
      'Meeting of the Waters',
      'Teatro Amazonas',
      'Mercado Municipal Adolpho Lisboa',
      'MUSA — Museu da Amazônia',
      'Novo Airão',
      'Anavilhanas National Park',
      'Rio Negro',
      'Presidente Figueiredo',
    ],

    nearbyIdeas: [
      {
        name: 'Novo Airão',
        description:
          'A small riverside town around 2.5 hours from Manaus and a useful base for exploring Anavilhanas National Park.',
      },
      {
        name: 'Anavilhanas National Park',
        description:
          'A huge river archipelago where you can explore channels, flooded forests, wildlife and river beaches.',
      },
      {
        name: 'Presidente Figueiredo',
        description:
          'An inland destination north of Manaus known for waterfalls and natural swimming areas.',
      },
      {
        name: 'Alter do Chão',
        description:
          'Much farther away, in Pará, but worth researching if you want to build a longer Amazon-focused trip.',
      },
    ],

    guideLinks: [
      {
        label: 'Amazon Guide — Manaus, Novo Airão & Anavilhanas',
        url: 'https://danae-explore.com/en/amazon-guide-manaus-novo-airao-anavilhanas/',
      },
      {
        label: 'How to Visit the Amazon Rainforest in Brazil',
        url: 'https://www.thesmoothescape.com/visit-the-amazon-rainforest-in-brazil/',
      },
    ],

    featured: false,
  },
  {
    id: 'brazil-iguacu-falls',
    slug: 'iguacu-falls',
    name: 'Foz do Iguaçu',

    shortDescription:
      'Home to one of the most spectacular waterfall systems in the world, right on Brazil’s border with Argentina.',

    fullDescription: `
Foz do Iguaçu is mainly famous for one thing — and honestly, that one thing is enough. The Iguaçu Falls are an enormous system of waterfalls spread across the border between Brazil and Argentina, surrounded by protected rainforest.

The scale is difficult to understand from photos. There are hundreds of individual cascades spread across a huge area, and the experience changes depending on which side you visit. The Brazilian side gives you the big panoramic views, while the Argentine side has longer trails and lets you get closer to different sections of the falls.

The most famous section is the Devil’s Throat, where an enormous amount of water drops into a narrow horseshoe-shaped canyon. Expect mist, noise and the very real possibility of getting wet.

Foz do Iguaçu is also very close to Paraguay. Brazil, Argentina and Paraguay meet just downstream from the falls, so this is one of the few places where you can easily see three countries as part of the same trip.

Most people stay in Foz do Iguaçu on the Brazilian side and use it as a base. The city itself is much more about convenience than sightseeing — the main attractions are the national park, the falls and the surrounding border area.

If you have the time, I would absolutely consider visiting both the Brazilian and Argentine sides. They are different enough that seeing only one gives you only part of the experience.

August is winter in this part of Brazil, so expect cooler temperatures than in Fortaleza or Salvador. Days are often pleasant, but mornings and evenings can be chilly, so bring a light jacket.
`,

    region: 'South',
    category: 'Nature',
    guide: 'brazil',

    coordinates: {
      lat: -25.6953,
      lng: -54.4367,
    },

    image: '/img/iguacu.jpg',
    imageAlt: 'Iguaçu Falls surrounded by rainforest',

    quickFacts: {
      fromFortaleza: 'Usually requires a flight connection',
      airport: 'IGU — Foz do Iguaçu International Airport',
      weather: 'Cooler winter weather in August — bring a light jacket',
      suggestedStay: '2–3 days',
      bestFor: ['Nature', 'Waterfalls', 'Photography', 'Short trips', 'Cross-border travel'],
    },

    pros: [
      'One of the most impressive natural attractions in Brazil',
      'You can experience both the Brazilian and Argentine sides',
      'Easy to understand what you are going there for — the falls are the main event',
      'You do not need a very long stay',
      'It fits well into a trip through southern or central Brazil',
      'If you are already visiting places such as Bonito, São Paulo or the South, it can be relatively easy to include',
    ],

    cons: [
      'It is far from Fortaleza, so you will almost certainly need to fly',
      'Direct flights from Fortaleza are not always available, so a connection may be necessary',
      'The destination is heavily centered around the waterfalls themselves',
      'If you visit both sides, remember that you are crossing an international border and need your passport',
      'Winter temperatures can feel surprisingly cool compared with the Northeast',
    ],

    placesToVisit: [
      'Brazilian side of Iguaçu Falls',
      'Argentine side of Iguazú Falls',
      'Devil’s Throat',
      'Parque das Aves',
      'Marco das Três Fronteiras',
      'Macuco Safari',
    ],

    nearbyIdeas: [
      {
        name: 'Puerto Iguazú, Argentina',
        description:
          'The Argentine base for visiting the other side of the falls. Very easy to combine with Foz do Iguaçu.',
      },
      {
        name: 'Ciudad del Este, Paraguay',
        description:
          'Just across the border in Paraguay. Mostly known for shopping, but useful if the idea of visiting three countries in one trip sounds fun.',
      },
      {
        name: 'Bonito',
        description:
          'Not exactly next door, but geographically much closer than Fortaleza and a natural combination if you are planning a nature-focused trip through this part of Brazil.',
      },
    ],

    guideLinks: [
      {
        label: 'A Guide to Visiting Iguazu Falls',
        url: 'https://www.mirandaboller.com/south-america/iguazufalls',
      },
      {
        label: 'The Ultimate Guide to Iguazu Falls — Argentina & Brazil',
        url: 'https://www.neverendingfootsteps.com/iguazu-falls-guide-argentina-brazil',
      },
      {
        label: 'Guide to the Brazilian Side of Iguazu Falls',
        url: 'https://www.lauratheexplorer.co.nz/blog/guide-to-the-brazilian-side-of-iguazu-falls',
      },
    ],

    featured: false,
  },
  {
    id: 'brazil-chapada-diamantina',
    slug: 'chapada-diamantina',
    name: 'Chapada Diamantina',

    shortDescription:
      'A dramatic landscape of mountains, caves, waterfalls and hiking trails in the interior of Bahia.',

    fullDescription: `
Chapada Diamantina is one of the best options on this list if you want to add real nature and adventure to your trip.

The region is full of caves, grottos, waterfalls, natural pools, huge plateaus and viewpoints where you can see for kilometers. The landscapes are very different from the coast, so even if you are already spending time in the Northeast, this does not feel like “more of the same”.

A big part of the experience is being outdoors. Depending on what you choose, you can do short hikes, longer trekking routes, visit caves, swim in waterfalls and natural pools, or spend the day moving between viewpoints and different parts of the park.

Lençóis is one of the main bases for exploring the region, and there are local guides and tour operators that organize everything from easier day trips to more demanding multi-day hikes.

If you are already planning to visit Salvador, Chapada Diamantina is especially worth considering because it can completely change the character of the trip. You can go from a historic coastal city to mountains, waterfalls and hiking without having to cross the entire country.

This is definitely more of an adventure-focused destination. It can still work with children depending on their age and the activities you choose, but for couples or adults who enjoy hiking and nature, it is one of the strongest options in the Northeast.

If you like the idea of Bonito but do not want to travel all the way to Central-West Brazil, Chapada can be a very good alternative for adding nature and adventure while staying in the Northeast — even though the two destinations offer very different types of experiences.
`,

    region: 'Northeast',
    category: 'Adventure',
    guide: 'brazil',

    coordinates: {
      lat: -12.9818,
      lng: -41.3603,
    },

    image: '/img/chapada-diamantina.jpg',
    imageAlt: 'Mountain landscape in Chapada Diamantina',

    quickFacts: {
      fromFortaleza:
        'Best combined with Salvador; usually involves flying to Bahia and continuing by road or regional transport',
      airport: 'LEC — Lençóis Airport, depending on available flights',
      weather: 'August is generally dry, with warm days and cooler nights',
      suggestedStay: '4–6 days',
      bestFor: ['Hiking', 'Waterfalls', 'Caves', 'Adventure', 'Nature', 'Scenery'],
    },

    pros: [
      'A completely different experience from the northeastern coast',
      'Excellent if you want hiking, caves and waterfalls',
      'Very easy to combine conceptually with a Salvador trip',
      'Some of the most dramatic inland landscapes in the Northeast',
      'Plenty of guided options for different fitness levels',
    ],

    cons: [
      'Getting there takes more effort than visiting a major city',
      'The region is large, so transport and planning matter',
      'Some of the best attractions involve hiking or long days outdoors',
      'It may be less practical with very young children depending on the itinerary',
      'You will probably get much more out of the trip with a local guide',
    ],

    placesToVisit: [
      'Morro do Pai Inácio',
      'Cachoeira da Fumaça',
      'Poço Azul',
      'Poço Encantado',
      'Vale do Pati',
      'Gruta da Lapa Doce',
      'Pratinha',
      'Lençóis',
    ],

    nearbyIdeas: [
      {
        name: 'Salvador',
        description:
          'Probably the easiest city to combine with Chapada if you want history, culture and coast before or after the adventure part of the trip.',
      },
      {
        name: 'Lençóis',
        description:
          'One of the most common bases for exploring the region and organizing guided trips.',
      },
    ],

    guideLinks: [
      {
        label: 'Discover Chapada Diamantina',
        url: 'https://www.raizesdachapada.com.br/en/descubraachapadadiamantina',
      },
      {
        label: 'Chapada Diamantina National Park Travel Guide',
        url: 'https://destinationlesstravel.com/chapada-diamantina-national-park-brazil/',
      },
    ],

    featured: false,
  },
  {
    id: 'brazil-brasilia',
    slug: 'brasilia',
    name: 'Brasília',

    shortDescription:
      'Brazil’s purpose-built capital — a strange, fascinating experiment in modernist architecture and urban planning.',

    fullDescription: `
Brasília is Brazil’s capital and probably the most unusual major city in the country.

Unlike Rio, Salvador or São Paulo, Brasília did not slowly grow over centuries. It was deliberately planned and built in the interior of Brazil between 1956 and 1960, during the government of President Juscelino Kubitschek, as part of a huge national modernization project.

Moving the capital inland had been discussed for generations. The idea was partly to bring political and economic development toward the center of the country instead of concentrating everything along the coast, and historically there were also strategic arguments that an inland capital would be less vulnerable to an attack from the sea.

Building an entire capital in only a few years was, unsurprisingly, extremely expensive. Kubitschek’s wider development program involved huge public investment and contributed to the inflation Brazil experienced during that period. So one way of looking at Brasília is: Brazil decided it wanted a futuristic capital in the middle of the country and then went very, very hard on making it happen.

The city was planned by urbanist Lúcio Costa, while many of its most famous buildings were designed by Oscar Niemeyer. The original Plano Piloto is organized around two huge intersecting axes and is famously described as looking like an airplane from above. The government buildings sit along the monumental axis, while the residential areas stretch out along the two “wings”.

And because everything was planned, the city works very differently from most places you have probably visited. Residential areas are divided into large superblocks, government buildings are concentrated in specific sectors, and many neighborhoods were designed to repeat the same basic structure.

This is also where Brazil’s federal government lives. The National Congress, Supreme Court, ministries and presidential offices are all here. So if your idea of sightseeing includes Brazilian politics — or attempting to spot the president (hopefully Lula yet!) from a respectful and legally appropriate distance — this is the place.
`,

    region: 'Central-West',
    category: 'Culture',
    guide: 'brazil',

    coordinates: {
      lat: -15.7939,
      lng: -47.8828,
    },

    image: '/img/brasilia.jpg',
    imageAlt: 'Modernist architecture in Brasília',

    quickFacts: {
      fromFortaleza: 'Approx. 2h30–3h by direct flight',
      airport: 'BSB — Brasília International Airport',
      weather: 'Warm, sunny and extremely dry in August; nights can be cooler',
      suggestedStay: '1–2 days',
      bestFor: [
        'Architecture',
        'Modernism',
        'Urban planning',
        'Politics',
        'Something completely different',
      ],
    },

    pros: [
      'One of the most unusual cities in Brazil',
      'A UNESCO World Heritage Site for its modernist urban plan and architecture',
      'Excellent if architecture or urban planning interests you',
      'Most major government and architectural landmarks are concentrated around the Monumental Axis',
      'A relatively easy direct flight from Fortaleza',
      'You can see the main highlights without needing a long stay',
    ],

    cons: [
      'This is a very specific destination — if architecture and urban planning do not interest you, there may be better uses of your holiday time',
      'The city is extremely spread out and designed heavily around cars',
      'Walking between places can be much less practical than the map makes it look',
      'August is extremely dry, which can be uncomfortable if you are not used to very low humidity',
      'The planned, repetitive layout can feel a little surreal',
    ],

    placesToVisit: [
      'National Congress',
      'Praça dos Três Poderes',
      'Palácio do Planalto',
      'Cathedral of Brasília',
      'Palácio Itamaraty',
      'JK Memorial',
      'Esplanada dos Ministérios',
      'Pontão do Lago Sul',
    ],

    personalTake: [
      `I have actually been to Brasília, although I went in 2014 when I was 19, so please do not treat this as the opinion of a sophisticated architecture critic.`,

      `I did enjoy it. It felt very different from anything else I had seen in Brazil, precisely because everything is so planned and structured.`,

      `At the same time, I found it slightly unsettling in a funny way. When you are around the residential wings, there are sections where the apartment blocks follow the same logic again and again, and the city can start to feel almost too organized.`,

      `The architecture is genuinely unique. Whether you think it is brilliant or slightly ridiculous is another question. Some of the buildings look incredible, but there are moments where you do wonder whether designing giant glass-heavy structures under the very strong Brasília sun was the most practical idea humanity ever had.`,

      `Still, I think Brasília is worth considering if architecture or urban planning really interests you, because there is basically nowhere else in Brazil that feels like this.`,

      `Pieter, this recommendation may be mostly for you. Please do some research before reorganizing your entire Brazilian holiday around concrete, symmetry and Oscar Niemeyer.`,
    ],

    guideLinks: [
      {
        label: 'Discover Brasília — A Traveler’s Guide to Brazil’s Futuristic Capital',
        url: 'https://www.leftturnstravel.com/post/bras%C3%ADlia',
      },
      {
        label: 'Complete Guide to Discovering Brasília',
        url: 'https://www.farejaviagens.com.br/en/guia-completo-para-descobrir-brasilia-tudo-que-voce-precisa-saber/',
      },
    ],

    featured: false,
  },
  {
    id: 'brazil-lencois-maranhenses',
    slug: 'lencois-maranhenses',
    name: 'Lençóis Maranhenses',

    shortDescription:
      'Huge white dunes filled with freshwater lagoons — yes, it really looks like the photos.',

    fullDescription: `
Lençóis Maranhenses is one of those places that looks slightly fake in pictures. Huge white dunes, bright blue and green freshwater lagoons, almost no vegetation in some parts… it honestly looks like someone rendered another planet and forgot to make it believable.

And apparently, the photos are not lying. I have never been myself, but everyone I know who has visited says pretty much the same thing: yes, it actually looks like that in real life. No Instagram fraud here.

The park is in Maranhão, another state in the Northeast, and the landscape is formed by enormous dunes that fill with rainwater during the wet season. That means timing matters a lot. Around June to September, the lagoons are generally at their best, which makes August a very good time for your trip.

The catch is that getting there takes a bit more work. This is not the kind of place where you land, order an Uber and five minutes later you are inside the park. Most people use places like Barreirinhas, Atins or Santo Amaro as a base and then explore the dunes with authorized 4x4 tours, boats or guided walks.

So, a little like Jericoacoara here in Ceará, the extra effort is part of the deal. You suffer slightly more in the logistics department and then nature rewards you by showing off.

Fun fact: parts of Avengers: Infinity War were filmed here to represent the planet Vormir. Which makes complete sense, because if you told me this landscape belonged to another planet I would probably just believe you.

One small Ceará propaganda break: we also have the so-called Lençóis Cearenses here. They are not on the same scale as Lençóis Maranhenses, so let us not start a diplomatic crisis between Ceará and Maranhão, but if you are already staying around Fortaleza and just want a taste of dunes and lagoons without adding another state to the trip, it may be worth looking into as well.
`,

    region: 'Northeast',
    category: 'Nature',
    guide: 'brazil',

    coordinates: {
      lat: -2.5333,
      lng: -43.1167,
    },

    image: '/img/lencoes-maranhenses.jpg',
    imageAlt: 'White sand dunes and freshwater lagoons in Lençóis Maranhenses',

    quickFacts: {
      fromFortaleza:
        'Not a quick trip — flying to São Luís and continuing by road is usually the most straightforward option',
      airport: 'SLZ — São Luís International Airport, then ground transport',
      weather: 'Warm in August, with the lagoons generally still in very good condition',
      suggestedStay: '3–5 days',
      bestFor: [
        'Nature',
        'Landscapes',
        'Photography',
        'Swimming',
        'Adventure',
        'Something completely different',
      ],
    },

    pros: [
      'One of the most unique landscapes in Brazil',
      'August is generally a very good time to see the lagoons full',
      'It looks just as crazy in real life as it does in photos, according to basically everyone I know who has been',
      'Completely different from a normal beach destination',
      'Can be combined with São Luís if you want to make the trip more worthwhile',
    ],

    cons: [
      'Getting there requires more planning than most city destinations',
      'You usually need organized transport or tours to properly explore the park',
      'It is not exactly close to Fortaleza — driving is possible, but it is a proper road trip, not a casual afternoon drive',
      'The lagoon experience depends on rainfall, so conditions can vary from year to year',
      'If you mainly want dunes and lagoons and do not care about seeing the famous version, there are easier alternatives closer to Fortaleza',
    ],

    placesToVisit: [
      'Lagoa Bonita',
      'Lagoa Azul',
      'Santo Amaro',
      'Atins',
      'Barreirinhas',
      'Rio Preguiças',
      'Caburé',
    ],

    nearbyIdeas: [
      {
        name: 'São Luís',
        description:
          'The capital of Maranhão and the most obvious city to combine with Lençóis. If you are already flying there, it makes sense to at least look into spending a day or two in the city.',
      },
      {
        name: 'Atins',
        description:
          'A small, laid-back village on the edge of the park that can work as an alternative base to Barreirinhas.',
      },
      {
        name: 'Rota das Emoções',
        description:
          'A longer route connecting Lençóis Maranhenses, the Parnaíba Delta and Jericoacoara — basically the ambitious version if you decide you want to turn this into a proper Northeast road trip.',
      },
    ],

    guideLinks: [
      {
        label: 'Lençóis Maranhenses — Complete Travel Guide',
        url: 'https://www.bucketlistly.blog/posts/lencois-maranhenses-complete-travel-guide',
      },
      {
        label: 'Lençóis Maranhenses — An Insider’s Travel Guide',
        url: 'https://atelier.travel/lencois-maranhenses-an-insiders-travel-guide/',
      },
    ],

    featured: true,
  },
  {
    id: 'brazil-maceio',
    slug: 'maceio',
    name: 'Maceió',

    shortDescription:
      'A relaxed northeastern coastal city with warm turquoise water, urban beaches and easy access to some of Alagoas’ most beautiful coastline.',

    fullDescription: `
Maceió is one of those destinations where the main attraction is very simple: the sea is ridiculously pretty.

The city sits on the coast of Alagoas and is known for warm turquoise water, reefs and beaches that look much closer to the stereotypical “Caribbean” image than what many people expect from Brazil.

Maceió itself has urban beaches such as Pajuçara and Ponta Verde, so you can stay in the city and still have that beach experience without needing to travel far every day.

But one of the biggest advantages of using Maceió as a base is what is around it. The coast of Alagoas has several beach towns, natural pools and quieter stretches of coastline, so you can build the trip depending on how much moving around you actually feel like doing.

If your goal is basically “warm water, beach, relax, repeat”, Maceió makes a lot of sense. It is less about major sightseeing and more about enjoying the coast.

That said, if you are already spending a lot of time around Ceará, I would ask yourself whether you want another beach-heavy destination or whether you would rather use those days for something completely different. The beach is beautiful, yes. But at some point we do need to admit that Brazil has a suspicious amount of beautiful beaches.
`,

    region: 'Northeast',
    category: 'Beach',
    guide: 'brazil',

    coordinates: {
      lat: -9.6498,
      lng: -35.7089,
    },

    image: '/img/maceio.jpg',
    imageAlt: 'Turquoise coastline in Maceió',

    quickFacts: {
      fromFortaleza: 'Usually around 1h30–2h by direct flight when available',
      airport: 'MCZ — Maceió International Airport',
      weather: 'Warm in August, usually in the mid-to-high 20s °C',
      suggestedStay: '3–5 days',
      bestFor: ['Beaches', 'Warm water', 'Relaxing', 'Natural pools', 'Easy coastal trips'],
    },

    pros: [
      'Beautiful warm-water coastline',
      'Easy beach experience without needing a complicated itinerary',
      'Good base for exploring other parts of the Alagoas coast',
      'Works well if you want to keep the trip relaxed',
    ],

    cons: [
      'If you are already doing Ceará, this can feel like another variation of the same beach-focused trip',
      'Many of the most famous places are outside the city itself',
      'August can still have some rain',
      'Not the strongest option if you want history, big-city culture or adventure',
    ],

    placesToVisit: [
      'Pajuçara',
      'Ponta Verde',
      'Praia do Francês',
      'Praia do Gunga',
      'São Miguel dos Milagres',
      'Ipioca',
    ],

    nearbyIdeas: [
      {
        name: 'Maragogi',
        description:
          'One of the most famous beach destinations in Alagoas, known for very clear turquoise water and natural pools.',
      },
      {
        name: 'São Miguel dos Milagres',
        description: 'A quieter coastal option if you want something more relaxed and less urban.',
      },
    ],

    guideLinks: [
      {
        label: 'Guide to Maceió',
        url: 'https://www.farejaviagens.com.br/en/guia-maceio-alagoas/',
      },
    ],

    featured: false,
  },
  {
    id: 'brazil-maragogi',
    slug: 'maragogi',
    name: 'Maragogi',

    shortDescription:
      'A small coastal destination famous for crystal-clear turquoise water and natural pools.',

    fullDescription: `
Maragogi is one of the most famous beach destinations on the Alagoas coast and is often marketed as the “Brazilian Caribbean” because of the clear turquoise water.

The main attraction here is the sea. Offshore reefs create natural pools that can become extremely clear depending on the tide and weather, which is why so many of the photos look slightly unreasonable.

This is a much smaller and more beach-focused destination than Maceió or Recife. You are not coming here for museums, nightlife or a big-city experience. You come because you want beautiful water, beaches and a slower pace.

Maragogi sits roughly between Maceió and Recife, which makes it quite flexible. You can reach it from either city and even use it as a stop between the two if you are building a longer northeastern route.

One important thing here is the tide. The natural pools are much more dependent on tide conditions than a normal beach day, so this is one of those places where checking the tide chart is not nerd behavior — it is actually useful.
`,

    region: 'Northeast',
    category: 'Beach',
    guide: 'brazil',

    coordinates: {
      lat: -9.0122,
      lng: -35.2225,
    },

    image: '/img/maragogi.jpg',
    imageAlt: 'Turquoise water and natural pools in Maragogi',

    quickFacts: {
      fromFortaleza: 'Best reached via Maceió or Recife, followed by road transport',
      airport: 'MCZ or REC, then road transfer',
      weather: 'Warm in August, with tropical temperatures and some chance of rain',
      suggestedStay: '2–3 days',
      bestFor: ['Beaches', 'Natural pools', 'Clear water', 'Relaxing', 'Short coastal stays'],
    },

    pros: [
      'Some of the clearest and most photogenic water in the Northeast',
      'Easy to combine with either Maceió or Recife',
      'Great if you want a quiet, beach-first destination',
      'Natural pools make it feel different from a standard beach stop',
    ],

    cons: [
      'The experience is very tide-dependent',
      'It is a small destination, so do not expect a huge variety of activities',
      'You need road transport from the nearest major airports',
      'If you are already doing several Ceará beaches, ask yourself how many turquoise-water photos your phone actually needs',
    ],

    placesToVisit: [
      'Galés de Maragogi',
      'Praia de Antunes',
      'Praia de Barra Grande',
      'Caminho de Moisés',
      'Praia de Xaréu',
    ],

    nearbyIdeas: [
      {
        name: 'Maceió',
        description:
          'A larger city and a natural option if you want to combine Maragogi with more beach infrastructure and other parts of the Alagoas coast.',
      },
      {
        name: 'Recife',
        description:
          'Also works as a gateway to Maragogi and gives you a much more urban and cultural contrast to the beach stay.',
      },
    ],

    guideLinks: [
      {
        label: 'Maragogi Travel Guide',
        url: 'https://www.sydneyandavis.com/destination/beach-guide-to-maragogi-and-japaratinga-brazil',
      },
      {
        label: 'Maragogi Travel Tips',
        url: 'https://travelpal.ai/destinations/south-america/brazil/alagoas/maragogi',
      },
    ],

    featured: false,
  },
  {
    id: 'brazil-recife',
    slug: 'recife',
    name: 'Recife',

    shortDescription:
      'A large northeastern coastal city with beaches, rivers, bridges, history and a very strong local culture.',

    fullDescription: `
Recife is one of the biggest cities in the Northeast and, in some ways, it can feel a little like a more historic cousin of Fortaleza.

It grew around its port and has a much more visible colonial layer than Fortaleza. Recife Antigo, the old center, still has streets and buildings connected to the early Portuguese settlement, the sugar trade and the period of Dutch occupation in the 17th century.

That history is one of the things that makes Recife interesting. The city is built around rivers, canals, islands and bridges, so parts of it have a very particular urban landscape. You also have museums, music, food, beaches and a strong Pernambuco identity that feels different from Ceará.

One of the biggest advantages is Olinda, which is basically next door. Olinda is much smaller, older and more charming, with colorful colonial streets, churches and views over Recife. If you are already going to Recife, I would definitely look at both instead of treating them as completely separate trips.

Now, the slightly less romantic part: Recife is famous for shark incidents along parts of its urban coastline, especially around Boa Viagem. Yes, sharks. Very specifically sharks. So this is one of the few places in Brazil where you should actually pay attention to the warning signs before deciding that the ocean looks inviting.

People sometimes jokingly call the city “Hellcife”. I cannot personally confirm whether that is fair, but the nickname exists, so do with that information what you will.

If I had to summarize it very unfairly: imagine something with some of Fortaleza’s big-coastal-city energy, add more visible history and old architecture, put Olinda next door... and then add sharks.
`,

    region: 'Northeast',
    category: 'City',
    guide: 'brazil',

    coordinates: {
      lat: -8.0476,
      lng: -34.877,
    },

    image: '/img/recife.jpg',
    imageAlt: 'Recife coastline and city skyline',

    quickFacts: {
      fromFortaleza: 'Approx. 1h15 by direct flight',
      airport: 'REC — Recife/Guararapes International Airport',
      weather: 'Warm in August, usually in the mid-to-high 20s °C, with some chance of rain',
      suggestedStay: '2–4 days',
      bestFor: ['Culture', 'History', 'City life', 'Music', 'Food', 'Easy side trips'],
    },

    pros: [
      'Very easy and quick flight from Fortaleza',
      'More visible colonial history than Fortaleza',
      'Olinda is right next door and very easy to combine',
      'Good mix of city life, culture and coastline',
      'A strong local identity that feels noticeably different from Ceará',
      'Useful base if you want to continue to Maragogi or Porto de Galinhas',
    ],

    cons: [
      'It is another large, busy Brazilian city, so traffic and normal big-city awareness apply',
      'August can still have some rain',
      'Swimming at parts of the urban coastline requires real attention to shark warning signs and local restrictions',
      'If your main goal is only beautiful beaches, Ceará or destinations farther south of Recife may make more sense',
    ],

    placesToVisit: [
      'Recife Antigo',
      'Marco Zero',
      'Rua do Bom Jesus',
      'Boa Viagem',
      'Instituto Ricardo Brennand',
      'Oficina Francisco Brennand',
      'Casa da Cultura',
      'Sinagoga Kahal Zur Israel',
      'Olinda',
    ],

    nearbyIdeas: [
      {
        name: 'Olinda',
        description:
          'Basically the obvious combination with Recife: colorful colonial streets, churches and much more visible historic charm.',
      },
      {
        name: 'Porto de Galinhas',
        description:
          'A famous beach destination south of Recife if you want to add clearer water and a more beach-focused stay.',
      },
      {
        name: 'Maragogi',
        description:
          'Farther south, already in Alagoas, but Recife is one of the main gateways if you want to include it in the same trip.',
      },
    ],

    guideLinks: [
      {
        label: 'What to Do in Recife — Beaches, History & Culture',
        url: 'https://www.leftturnstravel.com/post/recife',
      },
      {
        label: 'Recife Travel Guide, Budget & Itinerary',
        url: 'https://www.thewanderingjuan.net/2025/07/travel-guide-budget-and-itinerary-for-recife.html',
      },
    ],

    featured: false,
  },
  {
    id: 'brazil-ilha-grande',
    slug: 'ilha-grande',
    name: 'Ilha Grande',

    shortDescription:
      'A car-free island near Rio where Atlantic rainforest, mountains and ridiculously beautiful beaches all meet.',

    fullDescription: `
Ilha Grande is one of the best additions to a Rio de Janeiro trip if you want to swap the city for a few days of nature.

The island is covered by Mata Atlântica — the Atlantic Forest — a completely different ecosystem from the Amazon, but also one of Brazil’s most important and biodiverse forests. In Ilha Grande, large areas of it are still very well preserved, covering the mountains almost all the way down to the sea.

That combination is what makes the island special: forest, mountains, tropical beaches, clear water and lots of smaller islands and bays around you. If the green mountains around Rio are part of the Brazil you have in your head, Ilha Grande gives you a much more immersive version of that.

Most visitors stay around Vila do Abraão, where you will find pousadas, restaurants and tour agencies. There are no normal roads or cars around the island, so exploring usually means hiking or taking boats and water taxis. The guide I linked below describes the island in exactly that way: trails through Atlantic rainforest, beaches, kayaking, snorkeling and boat trips rather than traditional city sightseeing. 

This is not really a luxury-island destination. Abraão has plenty of tourist infrastructure, but the charm is much more rustic and relaxed. If you want resorts, upscale restaurants and a more polished coastal experience, places such as Búzios may suit you better.

Ilha Grande is more for the person who wants beach + forest + a bit of adventure and does not mind that getting around sometimes involves a trail, a boat or both.
`,

    region: 'Southeast',
    category: 'Nature',
    guide: 'brazil',

    coordinates: {
      lat: -23.1517,
      lng: -44.2318,
    },

    image: '/img/ilha-grande.jpg',
    imageAlt: 'Atlantic Forest and clear water on Ilha Grande',

    quickFacts: {
      fromFortaleza: 'Best combined with Rio — fly to Rio first, then continue by road and boat',
      airport: 'GIG or SDU, followed by ground transport and boat',
      weather:
        'Mild in July and August; beautiful days are possible, but the water is cooler than in the Northeast',
      suggestedStay: '2–4 days',
      bestFor: ['Nature', 'Beaches', 'Hiking', 'Boat trips', 'Adventure', 'Relaxing'],
    },

    pros: [
      'Probably one of the best nature extensions to a Rio de Janeiro trip',
      'Beautiful combination of preserved Atlantic rainforest, mountains and beaches',
      'You can explore very different parts of the island by boat',
      'Works equally well for hiking and doing absolutely nothing on a beach',
      'No need for another domestic flight if you are already visiting Rio',
    ],

    cons: [
      'Getting there requires ground transport and a boat',
      'It is more rustic than luxurious',
      'There are no normal cars or roads connecting the island, so boats and walking are part of the experience',
      'Winter weather is less reliable than in Ceará',
      'The sea can feel much colder than what you will get used to in the Northeast',
    ],

    placesToVisit: [
      'Vila do Abraão',
      'Lopes Mendes',
      'Lagoa Azul',
      'Lagoa Verde',
      'Praia do Aventureiro',
      'Dois Rios',
      'Pico do Papagaio',
      'Praia de Abraãozinho',
    ],

    personalTake: [
      `Ilha Grande is very special to me. I went there in 2020, shortly before moving to Belgium, and I still think it might be the most beautiful place I have ever seen.`,

      `The combination of the water, the mountains, the forest and the general feeling of being surrounded by nature was incredible. It has the green, tropical side of Rio that you might imagine from photos, but much more preserved and without the city sitting in the middle of it.`,

      `And just to be clear: this is not the Amazon. This is Mata Atlântica, the Atlantic Forest, which is its own ecosystem and one of the most characteristic landscapes of this part of Brazil.`,

      `If you are travelling with a few people, I really recommend looking into hiring a small boat for the day. When I went, we hired a local boatman who stayed with us for the whole day, took us between different beaches and islands, waited while we relaxed, brought us somewhere to eat and basically let us explore at our own pace.`,

      `Back then we paid around R$100 per person, which was ridiculously cheap for what we got. Please do not arrive in 2026 waving this website at a boatman and demanding my 2020 pandemic price. I accept no responsibility.`,

      `Our boatman also had a dog, so at one point the trip was basically us, this man and his dog cruising around tropical islands all day. Hard to improve on that, really.`,

      `There are places with amazingly clear water, beautiful sunsets and little beaches that you can only really reach properly by boat or trail. If you like nature, beaches and a little bit of adventure, I think Ilha Grande is one of the strongest recommendations I can personally give on this entire list.`,

      `The trip itself was slightly memorable for another reason because my brother gave us Covid while we were there. We knew, isolated ourselves and avoided contact with other people, so this was not exactly the tourism experience I am recommending. Nature: 10/10. Family epidemiology: less impressive.`,

      `And one completely essential piece of cultural information: while we were out on the boat, our boatman pointed out a nearby location that he said was used during the filming of Twilight: Breaking Dawn. Apparently you can still reach the area. I assume this information is relevant to approximately zero of you, but I felt morally obliged to mention it.`,
    ],

    nearbyIdeas: [
      {
        name: 'Rio de Janeiro',
        description:
          'The obvious combination. A few days in Rio followed by Ilha Grande gives you city, beaches, mountains and much more preserved nature in the same trip.',
      },
      {
        name: 'Paraty',
        description:
          'A historic colonial town surrounded by the same Costa Verde landscape. It works extremely well as part of a Rio → Ilha Grande → Paraty route.',
      },
      {
        name: 'Búzios',
        description:
          'Another famous coastal escape from Rio, but with a much more developed and upscale tourist structure if you prefer comfort, restaurants and nightlife over jungle trails.',
      },
    ],

    guideLinks: [
      {
        label: 'A Handy Guide to Ilha Grande',
        url: 'https://aboveusonlyskies.com/ilha-grande-brazil/',
      },
      {
        label:
          'Guide to buzios because its close to Ilha Grande and the more structured/less nature-focused option if you want a coastal escape from Rio',
        url: 'https://chefleticia.com/2022/08/travel-guide-to-buzios-rio-de-janeiro/',
      },
    ],

    featured: false,
  },
  {
    id: 'brazil-pipa',
    slug: 'pipa',
    name: 'Pipa',

    shortDescription:
      'A lively beach village with cliffs, warm water, dolphins and a more relaxed alternative to a big coastal city.',

    fullDescription: `
Pipa is a beach town in Rio Grande do Norte, south of Natal, and it is a very easy destination to understand: beautiful beaches, dramatic cliffs, warm water, restaurants, bars and a small-town atmosphere that still has enough going on to keep things interesting.

It is especially known for its coastline. Beaches sit below tall cliffs, and the area around Baía dos Golfinhos is famous for dolphin sightings. Depending on the day and conditions, you may actually see dolphins swimming very close to the coast.

Compared with Fortaleza, Pipa is much smaller and more walkable. You are not going there for museums, big attractions or city life — you go because you want a few days where the main decisions are basically which beach, where to eat and whether you are feeling energetic enough to walk up another hill.

It also has a surprisingly lively atmosphere at night for such a small place, with restaurants, bars and a fairly international crowd.

For your trip specifically, Pipa can be interesting because it is still in the Northeast and relatively close to Ceará compared with destinations such as Rio or Foz do Iguaçu. You normally reach it through Natal and then continue by road.

The only thing I would keep in mind is that Ceará already gives you a lot of very good beaches. So Pipa makes most sense if you specifically like the idea of a smaller beach town with cliffs, dolphins and a bit more nightlife — rather than just wanting “another nice beach”.
`,

    region: 'Northeast',
    category: 'Beach',
    guide: 'brazil',

    coordinates: {
      lat: -6.2285,
      lng: -35.0486,
    },

    image: '/img/pipa.jpg',
    imageAlt: 'Cliffs and beach in Pipa, Rio Grande do Norte',

    quickFacts: {
      fromFortaleza: 'Best reached via Natal, followed by road transport',
      airport: 'NAT — Natal International Airport, then around 1.5–2h by road',
      weather: 'Warm in July and August, with tropical temperatures and possible rain',
      suggestedStay: '2–4 days',
      bestFor: ['Beaches', 'Dolphins', 'Cliffs', 'Nightlife', 'Relaxing', 'Couples'],
    },

    pros: [
      'Beautiful beaches with a different landscape from much of Ceará',
      'Good chance of seeing dolphins around the coast',
      'Small enough to feel relaxed but still has restaurants and nightlife',
      'Easy to combine with Natal',
      'Still relatively close to Fortaleza compared with many other Brazilian destinations',
    ],

    cons: [
      'You still need to reach Natal first and then continue by road',
      'It is another beach-focused destination, so it may overlap with your Ceará plans',
      'Some beaches involve stairs, hills or longer walks',
      'The town can get busy during weekends and holiday periods',
    ],

    placesToVisit: [
      'Praia do Centro',
      'Baía dos Golfinhos',
      'Praia do Amor',
      'Chapadão',
      'Praia do Madeiro',
      'Santuário Ecológico de Pipa',
    ],

    nearbyIdeas: [
      {
        name: 'Natal',
        description:
          'The main gateway to Pipa and an easy place to combine with the trip if you want another city and more beaches.',
      },
      {
        name: 'São Miguel do Gostoso',
        description:
          'A quieter beach-town option north of Natal if you want an even slower coastal trip.',
      },
    ],

    guideLinks: [
      {
        url: 'https://aboveusonlyskies.com/pipa-brazil/',
        label: 'Pipa Travel Guide',
      },
      {
        url: 'https://planrio.com/beyond-rio/pipa/',
        label: 'Pipa Travel Guide',
      },
    ],

    featured: false,
  },
  // --- Add new Brazil destinations above this line ---
];
