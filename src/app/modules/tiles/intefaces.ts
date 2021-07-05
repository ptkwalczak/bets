import { ROUTE_PATHS } from '../../routes';

export interface Tile {
  iconUrl: string;
  title: string;
  description: string;
}

export interface MenuItem {
  title: ROUTE_PATHS;
  icon: string;
}
