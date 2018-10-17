import React, { Component } from 'react';
import { Player, Table } from '../../state';
import { PlayerSlot } from '.';

interface Props {
  table: Table;
  findPlayer: (id?: string) => Player | undefined;
  joinTable: (id: string) => void;
  startGame: (id: string) => void;
  endGame: (id: string, idx: number) => void;
}

class TableView extends Component<Props> {
  render() {
    const {
      table = { _id: '', players: [] },
      findPlayer,
      joinTable,
      startGame,
      endGame
    } = this.props;

    let playerOne, playerTwo;

    if (table.players.length >= 1) {
      playerOne = findPlayer(table.players[0]);
    }

    if (table.players.length >= 2) {
      playerTwo = findPlayer(table.players[1]);
    }

    const queuePlayers = table.players
      .slice(2)
      .map(playerId => findPlayer(playerId));

    return (
      <div>
        <div className="table-view">
          <PlayerSlot slotName="One" player={playerOne} />
          <img src="/static/pool_table.jpg" />
          <PlayerSlot slotName="Two" player={playerTwo} />
        </div>
        <button onClick={() => joinTable(table._id)}>Join</button>
        <button onClick={() => startGame(table._id)}>Start</button>
        <button onClick={() => endGame(table._id, 0)}>Player One Wins!</button>
        <button onClick={() => endGame(table._id, 1)}>Player Two Wins!</button>
        <ul className="table-queue">
          {queuePlayers.length > 0
            ? queuePlayers.map(qp => qp && <li key={qp._id}>{qp.name}</li>)
            : 'the queue is empty'}
        </ul>
      </div>
    );
  }
}

export default TableView;
