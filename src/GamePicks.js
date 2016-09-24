import React, {Component} from 'react';
import './GamePicks.css';

// TODO: get game odds from e.g. http://www.footballlocks.com/nfl_odds.shtml
var data = {
    week: 3,
    games: [
        {id: 0, favorite: 'cin', underdog: 'den', spread: 3.5},
        {id: 1, favorite: 'oak', underdog: 'ten', spread: 1},
        {id: 2, favorite: 'ari', underdog: 'buf', spread: 4},
        {id: 3, favorite: 'bal', underdog: 'jax', spread: 1},
        {id: 4, favorite: 'mia', underdog: 'cle', spread: 9.5},
        {id: 5, favorite: 'nyg', underdog: 'was', spread: 3},
        {id: 6, favorite: 'gb', underdog: 'det', spread: 7},
        {id: 7, favorite: 'car', underdog: 'min', spread: 7},
        {id: 8, favorite: 'sea', underdog: 'sf', spread: 9.5},
        {id: 9, favorite: 'tb', underdog: 'la', spread: 5},
        {id: 10, favorite: 'pit', underdog: 'phi', spread: 3.5},
        {id: 11, favorite: 'kc', underdog: 'nyj', spread: 3},
        {id: 12, favorite: 'ind', underdog: 'sd', spread: 1},
        {id: 13, favorite: 'dal', underdog: 'chi', spread: 6.5},
        {id: 14, favorite: 'no', underdog: 'atl', spread: 3},
    ]
};

var teams = [
    'cin', 'den', 'oak', 'ten', 'ari', 'buf', 'bal', 'jax',
    'mia', 'cle', 'nyg', 'was', 'gb', 'det', 'car', 'min',
    'sea', 'sf', 'tb', 'la', 'pit', 'phi', 'kc', 'nyj',
    'ind', 'sd', 'dal', 'chi', 'no', 'atl', 'ne', 'hou'
];
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
        var highlighted = {fontWeight: "bold", fontSize: "larger", backgroundColor: "#ddd"};
        var textStyle = this.props.picked ? highlighted : {};
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

class GamePicks extends Component {
    render() {
        return (
            <div className="GamePicks">
                <p className="intro">Week {data.week}</p>
                <p className="tips">Click logos to make picks...</p>
                <GameList data={data.games}/>
            </div>
        );
    }
}

export default GamePicks;