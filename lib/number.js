'use strict';
const util   = require('./util.js');
const _      = require('lodash');

exports.rangeIntegerBiasedByWeekdays = function(min, max, schema){
  if(_.isUndefined(schema)) schema = {};

  let days = {};
  _.forOwn(schema, (options, day) => {
    days[day] = util.range(options.min, options.max);
  });

  for(var i=0; i<7; i+=1){
    if(_.isUndefined(days[i])){
      days[i] = util.range(min, max);
    }
  }

  return function(date){
    let key = date.day();
    return days[key]();
  };
};
