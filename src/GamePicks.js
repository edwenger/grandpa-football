import React, {Component} from 'react';
import './GamePicks.css';
import {team_logos, spreads_data} from './utils.js'

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
                <p className="intro">Week {spreads_data.week}</p>
                <p className="tips">Click logos to make picks...</p>
                <GameList data={spreads_data.games}/>
            </div>
        );
    }
}

export default GamePicks;