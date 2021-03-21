[![All dependencies](https://img.shields.io/librariesio/release/npm/verbal-time/2.1.0?style=flat-square "All dependencies of verbal-time@2.1.0")](https://libraries.io/npm/verbal-time/2.1.0)
[![Reported vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/verbal-time@2.1.0?style=flat-square "Reported vulnerabilities of verbal-time@2.1.0")](https://snyk.io/test/npm/verbal-time/2.1.0)
[![Commits](https://flat.badgen.net/github/commits/ArthurKa/verbal-time)](https://github.com/ArthurKa/verbal-time/commits/master)
[![NPM-version](https://img.shields.io/badge/npm-v2.1.0-blue.svg?style=flat-square&&logo=npm "Current NPM-version")](https://www.npmjs.com/package/verbal-time/v/2.1.0)
[![Total downloads](https://img.shields.io/npm/dt/verbal-time?style=flat-square "Total downloads for all the time")](https://npm-stat.com/charts.html?package=verbal-time)
[![Developed by](https://img.shields.io/badge/developed_by-ArthurKa-blueviolet.svg?style=flat-square "Have any questions? You are always welcome.")](https://github.com/ArthurKa/verbal-time/issues)\
[![Publish size](https://flat.badgen.net/packagephobia/publish/verbal-time@2.1.0?label=publish 'Publish size of verbal-time@2.1.0')](https://packagephobia.now.sh/result?p=verbal-time@2.1.0)
[![Install size](https://flat.badgen.net/packagephobia/install/verbal-time@2.1.0?label=install 'Install size of verbal-time@2.1.0')](https://packagephobia.now.sh/result?p=verbal-time@2.1.0)
[![Minified size](https://img.shields.io/bundlephobia/min/verbal-time@2.1.0?style=flat-square&label=minified "Minified size of verbal-time@2.1.0")](https://bundlephobia.com/result?p=verbal-time@2.1.0)
[![Minified + gzipped size](https://img.shields.io/bundlephobia/minzip/verbal-time@2.1.0?style=flat-square&label=minzipped "Minified + gzipped size of verbal-time@2.1.0")](https://bundlephobia.com/result?p=verbal-time@2.1.0)

# verbal-time@2.1.0

Spells time in words. Supports only **Russian** and **Ukrainian** languages.

## Installation
`verbal-time` is available via npm:
``` bash
$ npm i verbal-time@2.1.0
```

## Usage
### Basic
```ts
import verbalTime from 'verbal-time';

console.log(verbalTime(new Date('2019-09-27 12:00')));  // Полдень
console.log(verbalTime(new Date('2019-09-27 12:20')));  // 20 минут первого
console.log(verbalTime(new Date('2019-09-27 17:50')));  // Без 10 шесть
console.log(verbalTime(new Date('2019-09-27 06:30')));  // Половина седьмого
```

### With configuration
```ts
import verbalTime from 'verbal-time';

verbalTime({ lang: 'ua' });

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
```ts
import verbalTime from 'verbal-time';

verbalTime({ countDownFrom: 35 });

console.log(verbalTime(new Date('2019-09-27 16:34')));  // 34 минуты пятого
console.log(verbalTime(new Date('2019-09-27 16:35')));  // Без 25 пять
```

`spellCountDownMinutes`: Boolean (default **false**).
### Example
```ts
import verbalTime from 'verbal-time';

console.log(verbalTime(new Date('2019-09-27 21:53')));  // Без 7 десять

verbalTime({ spellCountDownMinutes: true });
console.log(verbalTime(new Date('2019-09-27 21:53')));  // Без 7 минут десять
```

`spellLastMinuteAsWord`: Boolean (default **true**) — to spell "1" or "минуты" last minute every hour.
### Example
```ts
import verbalTime from 'verbal-time';

console.log(verbalTime(new Date('2019-09-27 21:59')));  // Без минуты десять

verbalTime({ spellLastMinuteAsWord: false });
console.log(verbalTime(new Date('2019-09-27 21:59')));  // Без 1 десять
```

## Testing
Manually tested by developer. Automated tests are not provided.

## See also
- [decline-word](https://www.npmjs.com/package/decline-word)

---

Your improve suggestions and bug reports [are welcome](https://github.com/ArthurKa/verbal-time/issues) any time.
