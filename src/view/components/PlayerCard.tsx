import React from 'react';
import { Player } from '../../state';

interface Props {
  player: Player;
}

const PlayerCard = ({ player }: Props) => (
  <div key={player._id}>{JSON.stringify(player)}</div>
);

export default PlayerCard;
