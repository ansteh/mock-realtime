# mock-realtime
mock real time data as JSON

# preview
```js
'use strict';
const realtime = require('mock-realtime');
const Day = realtime.Day;

let now = Day({
  hours: { min: 10, max: 13},
  minutes: { min: 0, max: 59},
  seconds: { min: 0, max: 59},
  milliseconds: { min: 0, max: 999}
}, Date.now());

console.log(now.get().toString());
console.log(now.next().toString());
console.log(now.next().toString());
```

# range integer biased by weekday
```js
let biasedIntegerGenerator = exports.rangeIntegerBiasedByWeekdays(0, 20, {
  0: { min: 0, max: 0 }, //sunday
  6: { min: 0, max: 0 }  //saturday
});

for(var i=0; i<7; i+=1){
  let current = now.next();
  console.log(current.get().toString(), biasedIntegerGenerator(current.get()));
}
```

## License

MIT © [Andre Stehle](https://github.com/ansteh)
