import type { LucideIconData } from '@lucide/angular';
import {
  LucideAnchor,
  LucideArrowLeft,
  LucideArrowRight,
  LucideBuilding2,
  LucideBus,
  LucideCamera,
  LucideCheck,
  LucideChevronDown,
  LucideChevronRight,
  LucideClock,
  LucideCompass,
  LucideExternalLink,
  LucideGlobe,
  LucideImageOff,
  LucideInfo,
  LucideLandmark,
  LucideLanguages,
  LucideListFilter,
  LucideMapPin,
  LucideMapPinOff,
  LucideMenu,
  LucideMoon,
  LucideMountain,
  LucideMusic,
  LucideNavigation,
  LucideShieldAlert,
  LucideShoppingBag,
  LucideSparkles,
  LucideSun,
  LucideSunMedium,
  LucideTreePalm,
  LucideTriangleAlert,
  LucideUsers,
  LucideUtensils,
  LucideUtensilsCrossed,
  LucideWallet,
  LucideWaves,
  LucideWifi,
  LucideX
} from '@lucide/angular';

/**
 * Central icon registry. Keys are the semantic names used throughout the
 * app (data files, templates). Add a new Lucide icon here once and it
 * becomes available everywhere via <app-icon name="...">.
 * Browse available icons at https://lucide.dev/icons
 */
export const ICONS = {
  // navigation / chrome
  menu: LucideMenu.icon,
  close: LucideX.icon,
  compass: LucideCompass.icon,
  'arrow-right': LucideArrowRight.icon,
  'arrow-left': LucideArrowLeft.icon,
  'chevron-right': LucideChevronRight.icon,
  'chevron-down': LucideChevronDown.icon,
  'external-link': LucideExternalLink.icon,
  'map-pin': LucideMapPin.icon,
  'map-pin-off': LucideMapPinOff.icon,
  navigation: LucideNavigation.icon,
  info: LucideInfo.icon,
  sparkles: LucideSparkles.icon,
  check: LucideCheck.icon,
  filter: LucideListFilter.icon,
  'image-off': LucideImageOff.icon,
  'alert-triangle': LucideTriangleAlert.icon,
  globe: LucideGlobe.icon,
  anchor: LucideAnchor.icon,
  camera: LucideCamera.icon,

  // general tips
  money: LucideWallet.icon,
  internet: LucideWifi.icon,
  transport: LucideBus.icon,
  weather: LucideSunMedium.icon,
  safety: LucideShieldAlert.icon,
  language: LucideLanguages.icon,
  customs: LucideUsers.icon,
  food: LucideUtensilsCrossed.icon,
  time: LucideClock.icon,

  // categories
  city: LucideBuilding2.icon,
  beach: LucideWaves.icon,
  nature: LucideTreePalm.icon,
  mountain: LucideMountain.icon,
  culture: LucideLandmark.icon,
  adventure: LucideCompass.icon,
  nightlife: LucideMusic.icon,
  shopping: LucideShoppingBag.icon,
  dining: LucideUtensils.icon,
  day: LucideSun.icon,
  evening: LucideMoon.icon
} as const satisfies Record<string, LucideIconData>;

export type IconName = keyof typeof ICONS;
