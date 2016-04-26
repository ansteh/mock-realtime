'use strict';
const _      = require('lodash');
const seeds  = require('./seeds.js');
const Random = require('random-js');

const getPostSchemaBy = function(seedKey){
  let keys = _.keys(seeds);
  let seedIndex = _.indexOf(keys, seedKey);
  return _.filter(keys, function(seed, index){
    return index > seedIndex;
  });
};

exports.filterSchemaBy = function(seedKey, schema){
  let keys = getPostSchemaBy(seedKey);
  let resSchema = {};
  _.forOwn(schema, function(options, key){
    if(_.includes(keys, key)){
      resSchema[key] = options;
    }
  });
  return resSchema;
};

exports.range = function(min, max){
  let engine = Random.engines.mt19937().autoSeed();
  let distribution = Random.integer(min, max);
  return function() {
    return distribution(engine);
  };
};
