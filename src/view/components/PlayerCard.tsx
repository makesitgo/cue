import React from 'react';
import { parse, distanceInWordsStrict } from 'date-fns'
import { Player } from '../../state';

interface Props {
  player: Player;
}

const PlayerCard = ({ player }: Props) => (
  <tr key={player._id}>
    <td>{player.name}</td>
    <td>{player.currentElo}</td>
    <td>{distanceInWordsStrict(new Date(), parse(player.registrationDate))}</td>
  </tr>
);

export default PlayerCard;
