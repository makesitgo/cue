import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { logout, redirect } from '../../state/auth';
import { AppState } from '../../state';

interface OwnProps {}

interface StateProps {}

interface DispatchProps {
  logout: () => Promise<any>;
  redirect: () => Promise<any>;
}

type Props = OwnProps & StateProps & DispatchProps;

class LogoutButton extends Component<Props> {
 
  render(){ 
    const { logout, redirect } = this.props
    return <button className="logout-button" onClick={() => logout().then(() => redirect())} > LOG OUT </button>
  }
}

const mapStateToProps = (state: AppState) => ({
  players: state.players.all
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logout: () => dispatch<any>(logout.action()),
  redirect: () => dispatch<any>(redirect.action())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutButton);