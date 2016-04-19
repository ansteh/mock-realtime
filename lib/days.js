const moment = require('moment');
const _      = require('lodash');

module.exports = {
  min: 1,
  max: function (current){
    if(_.isUndefined(current)){
      current = Date.now();
    }
    return moment(current).endOf("month").date();
  }
};
