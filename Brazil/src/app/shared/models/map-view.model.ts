import { Coordinates } from './coordinates.model';

export interface MapView {
  center: Coordinates;
  zoom: number;
}
