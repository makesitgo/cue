import React from 'react';
import { Player } from '../../state';

interface Props {
  slotName: string;
  player?: Player;
}

const PlayerSlot = (props: Props) => {
  const { slotName, player } = props;

  return (
    <div>
      <h4>Player {slotName}:</h4>&nbsp;{player ? player.name : "No one yet..."}
    </div>
  );
};

export default PlayerSlot;
