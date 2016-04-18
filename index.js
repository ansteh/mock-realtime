'use strict';
const moment = require('moment');
const Random = require('random-js');
const _      = require('lodash');

const bench = {
  hours: { min: 0, max: 23},
  minutes: { min: 0, max: 59},
  seconds: { min: 0, max: 59},
  milliseconds: { min: 0, max: 999}
};

const range = function(min, max){
  let engine = Random.engines.mt19937().autoSeed();
  let distribution = Random.integer(min, max);
  return function() {
    return distribution(engine);
  };
};

const Day = function(schema, date){
  let current = moment(date);
  let distributions = {};

  _.forOwn(schema, function(options, name){
    distributions[name] = range(options.min, options.max);
  });

  function get(){
    return current;
  };

  function simulate(){
    _.forOwn(schema, function(options, name){
      current[name](distributions[name]());
    });
  };

  function next(){
    current.add(1, 'days');
    simulate();
    return get();
  };

  return {
    get: get,
    next: next,
    simulate: simulate
  };
};

module.exports = Day;
