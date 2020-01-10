[![All dependencies](https://img.shields.io/librariesio/release/npm/verbal-time/2.0.5?label=all%20dependencies)](https://libraries.io/npm/verbal-time/2.0.5)
[![Known vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/verbal-time@2.0.5?label=known%20vulnerabilities)](https://snyk.io/test/npm/verbal-time/2.0.5)
[![NPM-version](https://img.shields.io/badge/npm-v2.0.5-blue.svg)](https://www.npmjs.com/package/verbal-time/v/2.0.5)
[![Install size](https://packagephobia.now.sh/badge?p=verbal-time@2.0.5)](https://packagephobia.now.sh/result?p=verbal-time@2.0.5)
[![Total downloads](https://img.shields.io/npm/dt/verbal-time?label=total%20downloads)](https://npm-stat.com/charts.html?package=verbal-time)

# verbal-time@2.0.5

Spells time with words. Supports only **Russian** and **Ukrainian** languages.

## Installation
`verbal-time` is available via npm:
``` bash
$ npm i verbal-time@2.0.5
```

## Usage
### Basic
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

console.log(verbalTime(new Date('2019-09-27 15:00')));  // Третя дня
console.log(verbalTime(new Date('2019-09-27 19:20')));  // 20 хвилин на восьму
console.log(verbalTime(new Date('2019-09-27 06:30')));  // Пів на сьому
console.log(verbalTime(new Date('2019-09-27 16:40')));  // За 20 п'ята

verbalTime({ spellCountDownMinutes: true });
console.log(verbalTime(new Date('2019-09-27 16:40')));  // За 20 хвилин п'ята
```

## Configuration properties
`lang`: 'ru' or 'ua' (default **'ru'**) — Russian or Ukrainian text language.

`countDownFrom`: 0..60 (default **30**) — the first minute that begins to be like in example.
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

`spellLastMinuteAsWord`: Boolean (default **true**) — to spell "1" or "минуты" last minute every hour.
### Example
``` js
const verbalTime = require('verbal-time');

console.log(verbalTime(new Date('2019-09-27 21:59')));  // Без минуты десять

verbalTime({ spellLastMinuteAsWord: false });
console.log(verbalTime(new Date('2019-09-27 21:59')));  // Без 1 десять
```

## Testing
No testing functionality provided.

---

Your improve suggestions and bug reports are welcome any time.
