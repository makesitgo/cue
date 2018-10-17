import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState, Player, Table, listTables } from '../../state';
import { TableView } from '..';

interface OwnProps {
  findPlayer: (id: string) => Player | undefined;
}

interface StateProps {
  tables: Table[];
}

interface MappedStateProps extends StateProps {
  players: Player[];
}

interface DispatchProps {
  listTables: () => void;
}

type Props = OwnProps & StateProps & DispatchProps;

class TablesView extends Component<Props> {
  componentDidMount() {
    this.props.listTables();
  }

  render() {
    const { findPlayer, tables } = this.props;
    return (
      <div>
        <h3>tables view!</h3>
        {/* TODO: handle many tables (tabs?) */}
        <TableView findPlayer={findPlayer} table={tables[0]} />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  tables: state.tables.all,
  players: state.players.all
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  listTables: () => dispatch<any>(listTables.action())
});

const mergeProps = (
  stateProps: MappedStateProps,
  dispatchProps: DispatchProps,
  ownProps: {}
) => ({
  tables: stateProps.tables,
  ...dispatchProps,
  findPlayer: (id: string) =>
    stateProps.players.find(player => player._id === id)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(TablesView);
