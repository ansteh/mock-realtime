module.exports = {
  /*years:        { min: 0, max: 23 },
  quarters:     { min: 0, max: 23 },
  months:       { min: 0, max: 23 },
  weeks:        { min: 0, max: 23 },*/
  days:         require('./days.js'),
  hours:        { min: 0, max: 23 },
  minutes:      { min: 0, max: 59 },
  seconds:      { min: 0, max: 59 },
  milliseconds: { min: 0, max: 999 }
};
