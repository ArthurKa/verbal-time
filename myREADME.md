<header>

Spells time in words. Supports only **Russian** and **Ukrainian** languages.

<installation>

## Usage
### Basic
```ts
import verbalTime from './verbal-time/src';

console.log(verbalTime(new Date('2019-09-27 12:00')));  // Полдень
console.log(verbalTime(new Date('2019-09-27 12:20')));  // 20 минут первого
console.log(verbalTime(new Date('2019-09-27 17:50')));  // Без 10 шесть
console.log(verbalTime(new Date('2019-09-27 06:30')));  // Половина седьмого
```

### With configuration
```ts
import verbalTime from './verbal-time/src';

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
import verbalTime from './verbal-time/src';

verbalTime({ countDownFrom: 35 });

console.log(verbalTime(new Date('2019-09-27 16:34')));  // 34 минуты пятого
console.log(verbalTime(new Date('2019-09-27 16:35')));  // Без 25 пять
```

`spellCountDownMinutes`: Boolean (default **false**).
### Example
```ts
import verbalTime from './verbal-time/src';

console.log(verbalTime(new Date('2019-09-27 21:53')));  // Без 7 десять

verbalTime({ spellCountDownMinutes: true });
console.log(verbalTime(new Date('2019-09-27 21:53')));  // Без 7 минут десять
```

`spellLastMinuteAsWord`: Boolean (default **true**) — to spell "1" or "минуты" last minute every hour.
### Example
```ts
import verbalTime from './verbal-time/src';

console.log(verbalTime(new Date('2019-09-27 21:59')));  // Без минуты десять

verbalTime({ spellLastMinuteAsWord: false });
console.log(verbalTime(new Date('2019-09-27 21:59')));  // Без 1 десять
```

<noTesting>

<seeAlsoTitle>
- [decline-word](<npmjs-com>/package/decline-word)

<suggestions>
