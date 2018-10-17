import React from 'react';
import { Player, Table } from '../../state';
import { PlayerSlot } from '.';

interface Props {
  table: Table;
  findPlayer: (id: string) => Player | undefined;
}

const TableView = ({ table = { players: [] }, findPlayer }: Props) => (
  <div className="table-view">
    <PlayerSlot slotName="One" player={findPlayer(table.players[0])} />
    <img src="/static/pool_table.jpg" />
    <PlayerSlot slotName="Two" player={findPlayer(table.players[1])} />
  </div>
);

export default TableView;
