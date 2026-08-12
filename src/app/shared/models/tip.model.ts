/**
 * A single practical travel tip shown in an accordion or card.
 * Content is placeholder text meant to be reviewed and replaced —
 * see src/app/data/general-tips.data.ts and the page-specific tip files.
 */
export interface TravelTip {
  id: string;
  title: string;
  summary: string;
  details?: string[];
  links?: { label: string; url: string }[];
  icon?: string;
  lastUpdated?: string;
}
