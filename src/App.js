import './App.css';
import EditPlayersContainer from './componets/EditPlayersContainer';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import React from 'react';
import GameContainer from './componets/GameContainer';
import PlayersContainer from './componets/PlayersContainer';
import { useState } from 'react';

function App() {

  const [visibleEditPlayers, setVisibleEditPlayers] = useState(false);

  const handleOpenEditPlayers = () => {
    setVisibleEditPlayers((prev) => !prev);
  }

  return (
    <Provider store={store}>
      <div className="App">
        <GameContainer/>
        {visibleEditPlayers ? (<EditPlayersContainer handleOpenEditPlayers={handleOpenEditPlayers}/>) : (<PlayersContainer handleOpenEditPlayers={handleOpenEditPlayers}/>)}
      </div>
    </Provider>
  );
}

export default App;
