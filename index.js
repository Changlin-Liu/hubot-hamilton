var fs = require('fs');
var path = require('path');

module.exports = function(robot, scripts) {
  var scriptsPath = path.resolve(__dirname, 'src');
  if (fs.existsSync(scriptsPath)) {
    var ref = fs.readdirSync(scriptsPath);
    for (var i = 0; i < ref.length; i++) {
      var script = ref[i];
      if (!!scripts && scripts.indexOf('*') < 0) {
        if (scripts.indexOf(script) >= 0) {
          robot.loadFile(scriptsPath, script);
        }
      } else {
        robot.loadFile(scriptsPath, script);
      }
    }
  }
};
