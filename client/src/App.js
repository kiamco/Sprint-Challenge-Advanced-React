import React from 'react';
import Axios from 'axios';
import Chart from './Components/playerChart.js';
import Button from './Components/button.js'
import './App.css'

class App extends React.Component {

  state = {
    players: {}
  }

  getPlayerData = (api) => {
    Axios.get(api)
      .then(res => {
        console.log(res.data);
        this.setState({ players: res.data });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getPlayerData('http://localhost:5000/api/players');
  }

  render() {
    return (
      <div className='App'>
          <Button />
        <div class='container'>
          <Chart data={this.state.players} />
        </div>
      </div>
    )
  }
}

export default App;
