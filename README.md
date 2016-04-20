# mock-realtime
mock real time data as JSON

# preview
```js
'use strict';
const Day = require('mock-realtime').Day;

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

## License

MIT © [Andre Stehle](https://github.com/ansteh)
