import React, {Component} from 'react';
import GamePicks from './GamePicks.js'
import GameScores from './GameScores.js'
import SeasonStandings from './SeasonStandings'
import './App.css';

class Home extends Component {
    render() {
        return (
            <div className="Home"/>
        );
    }
}

class App extends Component {

    constructor() {
        super();

        // TODO: consider using react-router for navigation?
        this.state = {route: window.location.hash.substr(1)};
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(1)
            })
        });
    }

    render() {

        let Child;
        switch (this.state.route) {
            case '/picks':
                Child = GamePicks;
                break;
            case '/scores':
                Child = GameScores;
                break;
            case '/standings':
                Child = SeasonStandings;
                break;
            default:
                Child = Home;
        }

        return (
            <div className="App">
                <div className="header"/>
                <div className="nav">
                    <ul>
                        <li><a className="title" href="#">grandpa.football</a></li>
                        <li><a href="#/picks">picks</a></li>
                        <li><a href="#/scores">scores</a></li>
                        <li><a href="#/standings">standings</a></li>
                    </ul>
                </div>
                <Child/>
            </div>
        );
    }
}

export default App;
