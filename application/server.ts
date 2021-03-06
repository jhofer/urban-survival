'use strict';

var express = require('express');
var app = express();



// Routing
require('./routes')(app);

// Express settings
require('./expressConfig')(app);


app.set('port', (process.env.PORT || 3000));

var server = app.listen(app.get('port'), function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, app.get('port'));

});