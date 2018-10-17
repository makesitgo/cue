import { buildReducer, newAsyncActionHandler } from '../../utils';
import { PlayersState, listPlayers } from './';

export const initialPlayersState: PlayersState = { loading: false, all: [] };

export const playersReducer = buildReducer(initialPlayersState, [
  newAsyncActionHandler(listPlayers.async, {
    onRequest: state => {
      state.loading = true;
      state.all = [];
      delete state.error;
    },
    onSuccess: (state, { result: players }) => {
      state.loading = false;
      // state.all = players.reduce((acc, player) => acc[player._id] = player, {});
      state.all = players;
    },
    onFailure: (state, { error }) => {
      state.loading = false;
      state.error = error.message;
    }
  })
]);
