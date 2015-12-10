// Description
//   Hamilton motivation
//
// Commands:
//   hubot hamilton - display a hamilton lyric
//
// Notes:
//   <optional notes required for the script>
//
// Author:
//   Jonathan Kaufman <jondakauf@gmail.com>

var lyrics = require('../resources/lyrics.json');

module.exports = function (robot) {
  robot.hear(/hamilton/i, function (res) {
    res.send(res.random(lyrics));
  });
}
