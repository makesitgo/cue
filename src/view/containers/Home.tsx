import React from 'react';
import { PlayersView, TablesView } from '.';
import { LogoutButton } from '../components'

const Home = () => (
  <div className="home">
    <div className = "header-bar">
        <h1>mongodb cue</h1>
      <LogoutButton />
    </div>
    <TablesView />
    <PlayersView />
  </div>
);

export default Home;
