import { buildReducer, newActionHandler } from '../../utils';
import { PlayersState, dummy } from './';

export const initialPlayersState: PlayersState = {};

export const playersReducer = buildReducer(initialPlayersState, [
  newActionHandler(dummy, state => state)
]);
