Spells time with words. Supports only **Russian** and **Ukrainian** languages.

## Installation
`verbal-time` is available via npm:
``` bash
$ npm i verbal-time
```

## Usage
``` js
const verbalTime = require('verbal-time');

console.log(verbalTime(new Date('2019-09-27 12:00')));  // Полдень
console.log(verbalTime(new Date('2019-09-27 12:20')));  // 20 минут первого
console.log(verbalTime(new Date('2019-09-27 17:50')));  // Без 10 шесть
console.log(verbalTime(new Date('2019-09-27 06:30')));  // Половина седьмого
```

### With configuration
``` js
const verbalTime = require('verbal-time')({ lang: 'ua' });

console.log(verbalTime(new Date('2019-09-27 15:00')));  // Тертя дня
console.log(verbalTime(new Date('2019-09-27 19:20')));  // 20 хвилин на восьму
console.log(verbalTime(new Date('2019-09-27 06:30')));  // Пів на сьому
console.log(verbalTime(new Date('2019-09-27 16:40')));  // За 20 п'ята

verbalTime({ spellCountDownMinutes: true });
console.log(verbalTime(new Date('2019-09-27 16:40')));  // За 20 хвилин п'ята
```

## Configuration properties
`lang`: 'ru' or 'ua' (default **'ru'**) — Russian or Ukrainian text language.

`countDownFrom`: 0..60 (default **30**) — the first minute that begins to be like example.
### Example
``` js
const verbalTime = require('verbal-time')({ countDownFrom: 35 });

console.log(verbalTime(new Date('2019-09-27 16:34')));  // 34 минуты пятого
console.log(verbalTime(new Date('2019-09-27 16:35')));  // Без 25 пять
```

`spellCountDownMinutes`: Boolean (default **false**).
### Example
``` js
const verbalTime = require('verbal-time');
console.log(verbalTime(new Date('2019-09-27 21:53')));  // Без 7 десять

verbalTime({ spellCountDownMinutes: true });
console.log(verbalTime(new Date('2019-09-27 21:53')));  // Без 7 минут десять
```

`spellLastMinute`: Boolean (default **true**) — same as `spellCountDownMinutes`, but only for one last minute every hour.
### Example
``` js
const verbalTime = require('verbal-time');
console.log(verbalTime(new Date('2019-09-27 21:79')));  // Без 1 десять

verbalTime({ spellCountDownMinutes: true });
console.log(verbalTime(new Date('2019-09-27 21:79')));  // Без 1 минуты десять
```

Your improve suggestions and bug reports are welcome any time.
