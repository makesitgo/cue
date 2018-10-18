import React from 'react';
import { parse, distanceInWordsStrict } from 'date-fns'
import { Player } from '../../state';

interface Props {
  player: Player;
}

const PlayerCard = ({ player }: Props) => (
  <tr>
    <td>{player.name}</td>
    <td>{player.currentElo}</td>
    <td>{((player.stats) || {wins: 0}).wins}</td>
    <td>{((player.stats) || {losses: 0}).losses}</td>
    <td>{distanceInWordsStrict(new Date(), parse(player.registrationDate))}</td>
  </tr>
);

export default PlayerCard;
