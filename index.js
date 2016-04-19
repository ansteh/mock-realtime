'use strict';
const moment = require('moment');
const Random = require('random-js');
const _      = require('lodash');

const util   = require('./lib/util.js');
const seeds = require('./lib/seeds.js');

//console.log(seeds.days.max().toString());

const range = function(min, max){
  let engine = Random.engines.mt19937().autoSeed();
  let distribution = Random.integer(min, max);
  return function() {
    return distribution(engine);
  };
};

const genIncrementer = _.curry(function(key, schema, date){
  let current = moment(date);
  let distributions = {};
  schema = util.filterSchemaBy(key, schema);

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
    current.add(1, key);
    simulate();
    return get();
  };

  return {
    get: get,
    next: next,
    simulate: simulate
  };
});

const Day = genIncrementer('days');

let now = Day({
  hours: { min: 10, max: 13},
  minutes: { min: 0, max: 59},
  seconds: { min: 0, max: 59},
  milliseconds: { min: 0, max: 999}
}, Date.now());

console.log(now.get().toString());
console.log(now.next().toString());
console.log(now.next().toString());

module.exports = Day;
