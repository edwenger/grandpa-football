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
});

class GameTeamHelmet extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleTeamPick(this.props.team)
    }

    render() {
        return (
            <div className="GameTeamHelmet-td-helmet" onClick={this.handleClick}>
                <img src={team_logos[this.props.team]} alt=""/>
            </div>
        );
    }
}

class GameTeam extends Component {
    render() {
        var textStyle = this.props.picked ? {fontWeight: "bold"} : {};
        return (
            <div className="GameTeam" style={textStyle}>{this.props.team}{this.props.spread}</div>
        );
    }
}

class Game extends Component {
    constructor() {
        super();
        this.state = {pick: null};
        this.pickTeam = this.pickTeam.bind(this);
    }

    pickTeam(team) {
        this.setState({pick: team});
    }

    render() {
        const spread = ' -' + this.props.spread;
        const pickedFavorite = (this.props.favorite === this.state.pick);
        const pickedUnderdog = (this.props.underdog === this.state.pick);
        return (
            <div className="Game">
                <GameTeamHelmet team={this.props.favorite} handleTeamPick={this.pickTeam}/>
                <GameTeam team={this.props.favorite} spread={spread} picked={pickedFavorite}/>
                <GameTeam team={this.props.underdog} spread='' picked={pickedUnderdog}/>
                <GameTeamHelmet team={this.props.underdog} handleTeamPick={this.pickTeam}/>
            </div>
        );
    }
}

class GameList extends Component {
    render() {
        var gameNodes = this.props.data.map(function (game) {
            return (
                <Game key={game.id} favorite={game.favorite} underdog={game.underdog} spread={game.spread}/>
            );
        });
        return (
            <div className="GameList">
                {gameNodes}
            </div>
        );
    }
}

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
