import { buildReducer, newAsyncActionHandler } from '../../utils';
import { TablesState, listTables } from './';

export const initialTablesState: TablesState = { loading: false, all: [] };

export const tablesReducer = buildReducer(initialTablesState, [
  newAsyncActionHandler(listTables.async, {
    onRequest: state => {
      state.loading = true;
      state.all = [];
      delete state.error;
    },
    onSuccess: (state, { result: tables }) => {
      state.loading = false;
      state.all = tables;
    },
    onFailure: (state, { error }) => {
      state.loading = false;
      state.error = error.message;
    }
  })
]);
