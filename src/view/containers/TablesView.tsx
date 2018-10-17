import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  AppState,
  Player,
  Table,
  listTables,
  joinTable,
  startGame,
  endGame
} from '../../state';
import { TableView } from '..';

interface OwnProps {
  findPlayer: (id?: string) => Player | undefined;
}

interface StateProps {
  tables: Table[];
}

interface MappedStateProps extends StateProps {
  players: Player[];
}

interface DispatchProps {
  listTables: () => void;
  joinTable: (id: string) => void;
  startGame: (id: string) => void;
  endGame: (id: string, idx: number) => void;
}

type Props = OwnProps & StateProps & DispatchProps;

class TablesView extends Component<Props> {
  componentDidMount() {
    this.props.listTables();
  }

  render() {
    const { findPlayer, joinTable, startGame, endGame, tables } = this.props;
    return (
      <div>
        {/* TODO: handle many tables (tabs?) */}
        <TableView
          findPlayer={findPlayer}
          joinTable={joinTable}
          startGame={startGame}
          endGame={endGame}
          table={tables[0]}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  tables: state.tables.all,
  players: state.players.all
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  listTables: () => dispatch<any>(listTables.action()),
  joinTable: (id: string) => dispatch<any>(joinTable.action(id)),
  startGame: (id: string) => dispatch<any>(startGame.action(id)),
  endGame: (tableId: string, winnerIdx: number) =>
    dispatch<any>(endGame.action({ tableId, winnerIdx }))
});

const mergeProps = (
  stateProps: MappedStateProps,
  dispatchProps: DispatchProps,
  ownProps: {}
) => ({
  tables: stateProps.tables,
  ...dispatchProps,
  findPlayer: (id?: string) =>
    stateProps.players.find(player => player._id === id)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(TablesView);
