import { GuideId } from '../models';

export const GUIDE_META: Record<GuideId, { label: string; path: string }> = {
  brazil: { label: 'Brazil', path: '/brazil' },
  ceara: { label: 'Ceará', path: '/ceara' },
  fortaleza: { label: 'Fortaleza', path: '/fortaleza' }
};
