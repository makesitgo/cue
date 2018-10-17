import actionCreatorFactory from 'typescript-fsa';
import { asyncFactory } from 'typescript-fsa-redux-thunk';
import { AppState, AsyncContext, Player } from '../';
import { RemoteMongoClient } from 'mongodb-stitch-browser-sdk';

const create = actionCreatorFactory('players');
const createAsync = asyncFactory<AppState, AsyncContext>(create);

export const dummy = create('dummy');

export const listPlayers = createAsync(
  'list',
  (_params, _dispatch, _getState, { client }) =>
    client
      .getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas')
      .db('cue')
      .collection<Player>('players')
      .find({})
      .asArray()
);
