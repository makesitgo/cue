import { StitchAppClient } from 'mongodb-stitch-browser-sdk';
import { RouterState } from 'react-router-redux';
// import { PlayersState } from './';

export interface AsyncContext {
  env: string;
  client: StitchAppClient;
  settings: WindowSettings;
}

export interface AppState {
  // players: PlayersState;
  routing: RouterState;
}
