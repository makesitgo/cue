import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState, Player, listPlayers } from '../../state';

interface OwnProps {}

interface StateProps {
  players: Player[];
}

interface DispatchProps {
  listPlayers: () => void;
}

type Props = OwnProps & StateProps & DispatchProps;

class PlayersList extends Component<Props> {

  componentDidMount() {
    this.props.listPlayers();
  }

  render() {
    const { players } = this.props;
    return (
      <div>
        {players.map(player => <div key={player._id}>{JSON.stringify(player)}</div>)}
      </div>
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
)(PlayersList);