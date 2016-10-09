// TODO: get game odds from e.g. http://www.footballlocks.com/nfl_odds.shtml
var spreads_data = {
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

// TODO: GET from DB on GamePicks load. POST to DB on click.
var game_picks = [
    {
        wenger: {
            1: {
                cle: +3.5, hou: -5.5, oak: +3, cin: -1, bal: -3,
                tb: +3, ten: +7.5, kc: -6.5, jax: +3.5, sea: -10.5,
                det: +3.5, nyg: -1, ne: +9, was: +2.5, la: -2.5
            },
            2: {
                ten: +6, kc: +2, mia: +6.5, cle: +6, pit: -3.5,
                dal: +3, nyg: -4.5, sf: +13.5, ari: -7, sea: -6.5,
                den: -6.5, atl: +4.5, jax: +3, gb: -2.5, phi: +3
            },
            3: {
                den: +3.5, ten: +1, ari: -4, cle: +9.5, bal: -1,
                nyg: -7, gb: -7, min: +7, sea: -9.5, la: +5,
                pit: -3.5, nyj: +3, sd: +1, chi: +6.5, no: -3
            },
            4: {
                jax: +2.5, was: -8.5, buf: +5.5, sea: -2.5, atl: +3,
                det: -3, hou: -5, bal: -3.5, den: -3, dal: -2.5,
                no: +4, ari: -8, kc: +5.5, nyg: +5
            },
            5: {}
        }
    }
];

function formatScores(uglyScores) {
  var meta = uglyScores.ss.gms[0].$;
  var gms = uglyScores.ss.gms[0].g;
  var scores = {};
  scores.week = str2Num(meta.w);
  scores.games = [];
  var i;
  for (i = 0; i < gms.length; i++) {
    scores.games.push(gms[i].$);
  }

  return scores;
}


function str2Num(str) {
  return Number(str.trim());
}

export {spreads_data, team_logos, game_picks, formatScores};