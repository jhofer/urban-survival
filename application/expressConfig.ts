'use strict';

var express = require('express');
var path = require('path');
/**
 * config
 */
module.exports = function(app) {
 // All undefined api routes should return a 404
  app.use(express.static( path.join(__dirname, 'assets')));

};
