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
