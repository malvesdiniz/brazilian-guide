import { IconName } from './icon-registry';

/**
 * Maps a destination's free-text category to an icon from the registry.
 * Falls back to a generic pin so new categories added in the data files
 * never break rendering — just add a case here for a nicer icon later.
 */
export function categoryIcon(category: string | undefined): IconName {
  switch (category?.toLowerCase()) {
    case 'city':
      return 'city';
    case 'beach':
    case 'beaches':
      return 'beach';
    case 'nature':
      return 'nature';
    case 'culture':
      return 'culture';
    case 'adventure':
      return 'adventure';
    case 'food':
    case 'dining':
      return 'dining';
    case 'nightlife':
      return 'nightlife';
    case 'shopping':
      return 'shopping';
    case 'daytime activities':
      return 'day';
    case 'evening activities':
      return 'evening';
    default:
      return 'map-pin';
  }
}
