import React, { Component } from 'react';
import PlayerForm from './PlayerForm';
import Game from './Game';

class App extends Component {

  state = { username: '', gameOver: false, gameStarted: false };

  setUsername = (e) => {
    this.setState({ username: e.target.value });
  }

  startGame = () => {
    this.setState({ gameStarted: true, gameOver: false });
  }

  endGame = () => {
    this.setState({ gameOver: true });
  }

  toggleStarted = () => {
    this.setState({ gameStarted: !this.state.gameStarted });
  }

  render() {
    let { gameStarted, username } = this.state;

    if(gameStarted)
      return(
        <Game
          {...this.state}
          startGame={this.startGame}
          toggleStarted={this.toggleStarted}
          endGame={this.endGame}
        />
      );
    else
      return(
        <PlayerForm
          username={username}
          setUsername={this.setUsername}
          startGame={this.startGame}
        />
      );
  }
}

export default App;
