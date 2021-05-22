import './App.css';
import React, {Component} from 'react';
import Gameblock from "./game/Gameblock";
import ButtonBlock from "./game/ButtonBlock";

class App extends Component {

  constructor(props) {
    super(props);
    this.initialState = {
      games : [
        {name:"lose", id: 1, result: ''},
        {name:"lose", id: 2, result: ''},
        {name:"lose", id: 3, result: ''},
        {name:"lose", id: 4, result: ''},
        {name:"lose", id: 5, result: ''},
        {name:"lose", id: 6, result: ''},
        {name:"lose", id: 7, result: ''},
        {name:"WIN", id: 8, result: ''},
        {name:"lose", id: 9, result: ''},
        {name:"lose", id: 10, result: ''},
        {name:"lose", id: 11, result: ''},
        {name:"lose", id: 12, result: ''},
        {name:"lose", id: 13, result: ''},
        {name:"lose", id: 14, result: ''},
        {name:"lose", id: 15, result: ''},
        {name:"lose", id: 16, result: ''},
        {name:"lose", id: 17, result: ''},
        {name:"lose", id: 18, result: ''},
        {name:"lose", id: 19, result: ''},
        {name:"lose", id: 20, result: ''},
        {name:"lose", id: 21, result: ''},
        {name:"lose", id: 22, result: ''},
        {name:"lose", id: 23, result: ''},
        {name:"lose", id: 24, result: ''},
        {name:"lose", id: 25, result: ''},
        {name:"lose", id: 26, result: ''},
        {name:"lose", id: 27, result: ''},
        {name:"lose", id: 28, result: ''},
        {name:"lose", id: 29, result: ''},
        {name:"lose", id: 30, result: ''},
        {name:"lose", id: 31, result: ''},
        {name:"lose", id: 32, result: ''},
        {name:"lose", id: 33, result: ''},
        {name:"lose", id: 34, result: ''},
        {name:"lose", id: 35, result: ''},
        {name:"lose", id: 36, result: ''},
      ],
      showgame: true,
      active: false,
      tires: '0',
      isStop: 'false'
    };
    this.state = this.initialState;

  }

  onResetClick(e) {
    e.preventDefault();
    this.setState(this.initialState);
  }

  handleClick = (id) => {
    if (this.state.isStop == 'false') {
      const index = this.state.games.findIndex(p=>p.id === id);
      let task = {...this.state.games[index]};
      if (task.name == 'WIN') {
        task.result = 'is-win'
        this.setState({isStop: 'true'});
      } else {
        task.result = 'is-lost'
      }
      const games = [...this.state.games];
      games[index] = task;
      this.setState({games});
      ++this.state.tires;
    }
  };

  render() {
    let tires = this.state.tires;
    let games = null;
    const iswin = this.state.isStop;
    if(this.state.showgame) {
      games = (
        <div className="App">
        <header className="App-header">
          {
              this.state.games.map((task, index) => {
                return <Gameblock
                  key={task.id}
                  name={task.name}
                  isresult={task.result}
                  check={() => this.handleClick(task.id)}>
                </Gameblock>
              })
            }
        </header>
      </div>
      );
    }

    return (
      <div className="App">
          {games}

        <div className="tires">
          Tires: {tires}
        </div>

        <div className={`${iswin} button-reset`}>
          <button type="button" onClick={this.onResetClick.bind(this)}>Reset</button>
        </div>

      </div>
    )
  }
}

export default App;
