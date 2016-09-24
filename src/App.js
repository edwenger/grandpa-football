import React, {Component} from 'react';
import GamePicks from './GamePicks.js'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header"/>
                <GamePicks/>
            </div>
        );
    }
}

export default App;
