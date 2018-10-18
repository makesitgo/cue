import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState, Player, listPlayers } from '../../state';
import { PlayerCard } from '../';

interface OwnProps {}

interface StateProps {
  players: Player[];
}

interface DispatchProps {
  listPlayers: () => void;
}

type Props = OwnProps & StateProps & DispatchProps;

class PlayersView extends Component<Props> {
  componentDidMount() {
    this.props.listPlayers();
  }

  render() {
    const { players } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Current Elo</th> 
            <th>Wins</th>
            <th>Losses</th>
            <th>Member for</th>
          </tr>
        </thead>
        <tbody>
          {players.map(player => <PlayerCard key={player._id} player={player} />)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  players: state.players.all
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  listPlayers: () => dispatch<any>(listPlayers.action())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayersView);
