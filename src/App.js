import React, {Component} from 'react';
import './App.css';
import logo from './football.svg';

// TODO: get game odds from e.g. http://www.footballlocks.com/nfl_odds.shtml
var data = {
    week: 2,
    games: [
        {id: 0, favorite: 'det', underdog: 'ten', spread: 6},
        {id: 1, favorite: 'hou', underdog: 'kc', spread: 1},
        {id: 2, favorite: 'ne', underdog: 'mia', spread: 5.5}
    ]
};

var teams = ['det', 'ten', 'hou', 'kc', 'ne', 'mia'];
var team_logos = {};
teams.forEach((name) => {
    team_logos[name] = require("./teams/" + name + ".png")
})

var Game = React.createClass({
    displayName: 'Game',
    render: function () {
        return (
            <tr className="Game-tr">
                <td className="Game-td-helmet"><img src={team_logos[this.props.favorite]} alt=""/></td>
                <td className="Game-td-left">{this.props.favorite} -{this.props.spread}</td>
                <td className="Game-td-right">{this.props.underdog}</td>
                <td className="Game-td-helmet"><img src={team_logos[this.props.underdog]} alt=""/></td>
            </tr>
        );
    }
});

var GameList = React.createClass({
    displayName: 'GameList',
    render: function () {
        var gameNodes = this.props.data.map(function (game) {
            return (
                <Game key={game.id} favorite={game.favorite} underdog={game.underdog} spread={game.spread}/>
            );
        });
        return (
            <table className="GameList-table">
                <tbody>
                {gameNodes}
                </tbody>
            </table>
        );
    }
});

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>grandpa.football</h2>
                </div>
                <p className="App-intro">Week {data.week}</p>
                <GameList data={data.games}/>
            </div>
        );
    }
}

export default App;
