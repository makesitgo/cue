import { StitchAppClient } from 'mongodb-stitch-browser-sdk';
import { RouterState } from 'react-router-redux';
import {
  PlayersState,
  initialPlayersState as players,
  TablesState,
  initialTablesState as tables
} from './';

export interface AsyncContext {
  env: string;
  client: StitchAppClient;
  settings: WindowSettings;
}

export interface AppState {
  players: PlayersState;
  tables: TablesState;
  routing: RouterState;
}

export const initialAppState: AppState = {
  players,
  tables,
  routing: {
    location: null
  }
};
