import { TravelTip } from '../shared/models';

export const CEARA_TIPS: TravelTip[] = [
  {
    id: 'fortaleza-as-a-base',
    title: 'Fortaleza works very well as a base',
    summary:
      'You do not need to change hotels every time you want to see another part of the coast.',
    details: [
      'Several destinations around Ceará can be visited from Fortaleza as day trips, while places farther away are usually more enjoyable with at least one overnight stay.',
      'This makes it easy to keep Fortaleza as your main base and decide how much moving around you actually want to do.',
      'Basically: you can turn this into a road trip, but you absolutely do not have to.',
    ],
    icon: 'map',
  },

  {
    id: 'getting-around-ceara',
    title: 'Getting around Ceará takes a few different forms',
    summary: 'Car, transfer, bus, 4x4, buggy... it depends a lot on where you are going.',
    details: [
      'For towns connected by normal roads, renting a car or booking a private/shared transfer is usually the simplest option.',
      'Traffic rules are in general the same as in Belgium or Netherlands, but the driving style is more aggressive and less predictable (it is possible to find all sort of things on the street with you, horses, bikes, people, trees...). Defensive driving is recommended.',
      'There are also intercity buses and vans connecting Fortaleza with many coastal destinations.',
      'In some dune and beach areas (such as the famous dunes of Jericoacoara), regular cars cannot reach every attraction. That is where local 4x4 vehicles, buggies and organized tours become useful. You can always choose a jeep or 4x4 car to rent, but I do not recomment to go in adventures with a regular car, even if you see people doing it.',
      'You usually do not need to plan every little transfer months in advance, but it is worth checking how the final part of the journey works before booking accommodation somewhere remote.',
    ],
    icon: 'transport',
  },

  {
    id: 'travel-time',
    title: 'Look at travel time, not just distance',
    summary: 'The map can make places look much closer than they actually feel.',
    details: [
      'Road quality, traffic, smaller coastal roads and sandy access routes can make relatively short distances take longer than expected.',
      'Before adding two or three places to the same day, check the real driving time rather than just looking at the number of kilometres.',
      'There is a point where “it is only a little farther” becomes most of your afternoon.',
      'You can trust estimations from Google or Waze',
    ],
    icon: 'transport',
  },

  {
    id: 'wind-season',
    title: 'The wind is part of the experience',
    summary: 'Especially in the second half of the year, the Ceará coast can get very windy.',
    details: [
      'This is one of the reasons Ceará is so popular for kitesurfing and other wind sports.',
      'For normal beach days, the wind is usually quite nice because it makes the heat much more comfortable.',
      'For hats, napkins, beach umbrellas and carefully organized hair, the wind has different priorities.',
    ],
    icon: 'weather',
  },

  {
    id: 'july-august-weather',
    title: 'July and August are a great time for the coast',
    summary: 'It is technically Brazilian winter. Ceará has chosen not to participate.',
    details: [
      'The coast stays warm throughout the year, and July and August are generally drier and windier than the first half of the year.',
      'All the beaches in Ceará have warm water (27°C) and are very pleasant for swimming, sunbathing and water sports.',
      'Beach weather is usually the default, although short tropical rain showers can obviously still happen.',
      'The breeze can make evenings feel pleasantly cooler, but this is still very much shorts-and-sandals weather.',
    ],
    icon: 'weather',
  },

  {
    id: 'tides',
    title: 'Sometimes the tide actually matters',
    summary: 'For some beaches, lagoons and coastal activities, the sea decides the schedule.',
    details: [
      'Certain natural pools, beach walks and coastal routes are better at specific tide levels.',
      'If a tour operator tells you that an activity only works at a certain time, there is usually a reason — they are not just trying to ruin your breakfast plans.',
      'For normal beach days you do not need to obsess over tide charts, but for specific excursions it is worth checking.',
    ],
    icon: 'compass',
  },
];
