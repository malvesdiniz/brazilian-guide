import { TravelTip } from '../shared/models';

/**
 * Placeholder tips specific to getting around Fortaleza. Replace with your
 * own notes as you research. See also general-tips.data.ts for cross-cutting
 * advice shown on the homepage.
 *
 * --- Add new tips by appending objects to this array ---
 */
export const FORTALEZA_TIPS: TravelTip[] = [
  {
    id: 'getting-around-the-city',
    title: 'Getting around the city',
    summary: 'A mix of ride-hailing, taxis, and buses cover most of the city.',
    details: [
      'Placeholder: ride-hailing apps are commonly used by visitors for point-to-point trips.',
      'Placeholder: confirm current guidance on which neighborhoods are easiest to walk between.'
    ],
    icon: 'transport'
  },
  {
    id: 'beachfront-avenue',
    title: 'The beachfront avenue',
    summary: 'A popular strip for walking, cycling, and evening activity.',
    details: [
      'Placeholder: weekends can be busier along the beachfront than weekdays.',
      'Placeholder: check current guidance on which sections are best during the day versus at night.'
    ],
    icon: 'beach'
  },
  {
    id: 'day-and-night-planning',
    title: 'Day and night planning',
    summary: 'Fortaleza has a distinct daytime and evening rhythm.',
    details: [
      'Placeholder: some markets and viewpoints are best visited earlier in the day.',
      'Placeholder: nightlife areas tend to get busier later in the evening.'
    ],
    icon: 'evening'
  }
];
