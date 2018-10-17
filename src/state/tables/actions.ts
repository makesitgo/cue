import actionCreatorFactory from 'typescript-fsa';
import { asyncFactory } from 'typescript-fsa-redux-thunk';
import { AppState, AsyncContext, Table } from '../';
import { RemoteMongoClient } from 'mongodb-stitch-browser-sdk';

const create = actionCreatorFactory('tables');
const createAsync = asyncFactory<AppState, AsyncContext>(create);

export const listTables = createAsync(
  'list',
  (_params, _dispatch, _getState, { client }) =>
    client
      .getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas')
      .db('cue')
      .collection<Table>('tables')
      .find({})
      .asArray()
);

export const joinTable = createAsync<string, void>(
  'join',
  (tableId, _dispatch, _getState, { client }) =>
    client.callFunction('joinQueue', [tableId])
);

export const startGame = createAsync<string, void>(
  'start game',
  (tableId, _dispatch, _getState, { client }) =>
    client.callFunction('startMatch', [tableId])
);

export const endGame = createAsync<
  { tableId: string; winnerIdx: number },
  void
>('end game', ({ tableId, winnerIdx }, _dispatch, _getState, { client }) =>
  client.callFunction('endMatch', [tableId, winnerIdx])
);

export const watchTable = createAsync(
  'watch',
  (_params, dispatch, _getState, { client }) =>
    client
      .getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas')
      .db('cue')
      .collection<Table>('tables')
      .watch(['nyc1633_38_0' as any])
      .then((stream: any) => {
        stream.onNext((e: any) => {
          console.log(e.fullDocument);
          if (e.fullDocument.players[1] === null) {
            return;
          }
          dispatch(updateTable(e.fullDocument));
        });
      })
);

export const updateTable = create<Table>('update');
