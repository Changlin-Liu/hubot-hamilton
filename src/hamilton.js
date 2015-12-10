// Description
//   Hamilton motivation
//
// Commands:
//   hubot hamilton <character-name> - display a hamilton lyric. can optionally specify a character's name
//
// Notes:
//   <optional notes required for the script>
//
// Author:
//   Jonathan Kaufman <jondakauf@gmail.com>

var lyrics = require('../resources/lyrics.json');

// create an array from the lyrics from every character
var allLyrics = [];
for (var key in lyrics) {
  if (lyrics.hasOwnProperty(key)) {
    allLyrics = allLyrics.concat(lyrics[key]);
  }
}

module.exports = function (robot) {
  robot.respond(/hamilton(.*)/i, function (res) {
    // the first capturing group may or may not contain a character's name
    // if it does limit the response to that character, otherwise use any lyric
    var match = res.match[1] && res.match[1].trim().toLowerCase();
    switch(match) {
    case 'hamilton':
    case 'alexander':
    case 'alex':
    case 'alexander hamilton':
      res.send(res.random(lyrics.hamilton));
      break;

    case 'burr':
    case 'bur':
    case 'brr':
    case 'aaron':
    case 'a-ron':
    case 'aaron burr':
      res.send(res.random(lyrics.burr));
      break;

    case 'gw':
    case 'washington':
    case 'george washington':
      res.send(res.random(lyrics.washington));
      break;

    case 'lafayette':
    case 'french':
    case 'marquis':
    case 'marquis de lafayette':
    case 'french man':
    case 'america\'s favorite fighting french man':
      res.send(res.random(lyrics.lafayette));
      break;

    case 'laurens':
    case 'john laurens':
      res.send(res.random(lyrics.laurens));
      break;

    case 'hercules':
    case 'mulligan':
    case 'hercules mulligan':
      res.send(res.random(lyrics.mulligan));
      break;

    case 'thomas':
    case 'jefferson':
    case 'thomas jefferson':
      res.send(res.random(lyrics.jefferson));
      break;

    case 'angelica':
    case 'angelica schuyler':
      res.send(res.random(lyrics.angelica.concat(lyrics.schuyler)));
      break;

    case 'eliza':
    case 'eliza schuyler':
      res.send(res.random(lyrics.eliza.concat(lyrics.schuyler)));
      break;

    case 'peggy':
    case 'peggy schuyler':
      res.send(res.random(lyrics.peggy));
      break;

    case 'schuyler':
      res.send(res.random(lyrics.schuyler));
      break;

    case 'king':
    case 'the king':
    case 'king george':
      res.send(res.random(lyrics.george));
      break;

    case 'philip':
    case 'phillip':
    case 'philip hamilton':
    case 'phillip hamilton':
      res.send(res.random(lyrics.philip));
      break;

    case 'ensemble':
    case 'chorus':
    case 'everyone':
    case 'the rest':
      res.send(res.random(lyrics.ensemble));
      break;

    default:
      res.send(res.random(allLyrics));
      break;
    }
  });
}
