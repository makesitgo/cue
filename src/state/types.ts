// TODO: add stitch client here
import { RouterState } from 'react-router-redux';
// import { PlayersState } from './';

export interface AsyncContext {
  env: string;
  settings: WindowSettings;
}

export interface AppState {
  // players: PlayersState;
  routing: RouterState;
}
