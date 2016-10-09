import React, {Component} from 'react';
import $ from 'jquery';
import jQuery from 'jquery';
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;
import xml2js from 'xml2js';
import {formatScores} from './utils.js'
import './GameScores.css';


// TODO: refactor Game component to avoid repetition with GamePicks page

class Game extends Component {
    render() {
        return (
            <div className="Game">
                <div className="visitor team">
                    {this.props.data.vnn}: {this.props.data.vs}
                </div>
                <div className="at">
                    at
                </div>
                <div className="home team">
                    {this.props.data.hnn}: {this.props.data.hs}
                </div>
            </div>
        );
    }
}

class GameList extends Component {
    render() {
        var gameNodes = this.props.games.map(function (game) {
            return (
                <Game key={game.eid} data={game}/>
            );
        });
        return (
            <div className="GameList">
                {gameNodes}
            </div>
        );
    }
}


class GameScores extends Component {

    constructor() {
        super();
        this.url = 'http://www.nfl.com/ajax/scorestrip';
        this.state = {week: 1, games: []};
        this.loadGamesFromServer();
    }

    setData(data) {
        xml2js.parseString(data, function (err, scores) {
            if (err) {
                console.error(err);
            }
            else {
                this.setState(formatScores(scores));
            }
        }.bind(this));
    }

    loadGamesFromServer() {
        $.ajax({
            url: this.url + '?year=2016&seasonType=REG&week=' + this.state.week,
            dataType: 'text',
            cache: false,
            success: function (data) {
                this.setData(data);
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.url, status, err.toString());
            }.bind(this)
        });
    }

    render() {
        return (
            <div className="GameScores">
                <p className="intro">Week {this.state.week}</p>
                <GameList games={this.state.games}/>
            </div>
        );
    }
}

export default GameScores;