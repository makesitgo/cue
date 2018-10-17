import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../../state';

interface OwnProps {}

interface StateProps {
  tables: {}[];
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
    return <div>tables view!</div>;
  }
}

const mapStateToProps = (state: AppState) => ({
  tables: []
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  listTables: () => {}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TablesView);
