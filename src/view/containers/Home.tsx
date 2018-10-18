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
    <h1> Rankings </h1>
    <PlayersView />
  </div>
);

export default Home;
