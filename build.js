var templatizer = require('templatizer');

// build our demo file
templatizer(__dirname + '/clientapp/templates', __dirname + '/clientapp/modules/templates.js');
