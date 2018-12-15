'use strict';

var SG = require('strong-globalize');
SG.SetRootDir(__dirname);

exports.initialize = function initializeDataSource(dataSource, callback) {
  console.log(dataSource.settings);
};