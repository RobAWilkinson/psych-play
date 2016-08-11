'use strict'
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var util = require('util');
var home = require('../app/controllers/home');

/**
 * Expose
 */

module.exports = function (app, stormpath) {
  app.get('/', home.index)

};
