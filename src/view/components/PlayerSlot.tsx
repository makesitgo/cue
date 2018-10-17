import React from 'react';
import { Player } from '../../state';

interface Props {
  slotName: string;
  player?: Player;
}

const PlayerSlot = (props: Props) => (
  <div>
    <h5>Player {props.slotName}</h5>
    {JSON.stringify(props.player)}
  </div>
)

export default PlayerSlot;
