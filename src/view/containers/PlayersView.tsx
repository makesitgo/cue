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
        <tr>
          <th>Player Name</th>
          <th>Current Elo</th> 
          <th>Member for</th>
        </tr>
        {players.map(player => <PlayerCard player={player} />)}
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
