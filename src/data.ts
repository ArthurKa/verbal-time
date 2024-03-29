import declineWord from 'decline-word';

export const exactHours = {
  ru: [
    'Полночь',
    'Час ночи',
    'Два часа ночи',
    'Три часа ночи',
    'Четыре часа утра',
    'Пять часов утра',
    'Шесть часов утра',
    'Семь часов утра',
    'Восемь часов утра',
    'Девять часов утра',
    'Десять часов утра',
    'Одиннадцать часов дня',
    'Полдень',
    'Час дня',
    'Два часа дня',
    'Три часа дня',
    'Четыре часа дня',
    'Пять часов вечера',
    'Шесть часов вечера',
    'Семь часов вечера',
    'Восемь часов вечера',
    'Девять часов вечера',
    'Десять часов вечера',
    'Одиннадцать часов вечера',
  ],
  ua: [
    'Північ',
    'Перша ночі',
    'Друга ночі',
    'Третя ночі',
    'Четверта ранку',
    "П'ята ранку",
    'Шоста ранку',
    'Сьома ранку',
    'Восьма ранку',
    "Дев'ята ранку",
    'Десята ранку',
    'Одинадцята дня',
    'Південь',
    'Перша дня',
    'Друга дня',
    'Третя дня',
    'Четверта дня',
    "П'ята вечора",
    'Шоста вечора',
    'Сьома вечора',
    'Восьма вечора',
    "Дев'ята вечора",
    'Десята вечора',
    'Одинадцята вечора',
  ],
};

export const lessLimitAnd30 = {
  ru: [
    'двенадцатого',
    'первого',
    'второго',
    'третьего',
    'четвёртого',
    'пятого',
    'шестого',
    'седьмого',
    'восьмого',
    'девятого',
    'десятого',
    'одиннадцатого',
  ],
  ua: [
    'на дванадцяту',
    'на першу',
    'на другу',
    'на третю',
    'на четверту',
    "на п'яту",
    'на шосту',
    'на сьому',
    'на восьму',
    "на дев'яту",
    'на десяту',
    'на одинадцяту',
  ],
};
export const more30 = {
  ru: [
    'час',
    'два',
    'три',
    'четыре',
    'пять',
    'шесть',
    'семь',
    'восемь',
    'девять',
    'десять',
    'одиннадцать',
    'двенадцать',
  ],
  ua: [
    'перша',
    'друга',
    'третя',
    'четверта',
    "п'ята",
    'шоста',
    'сьома',
    'восьма',
    "дев'ята",
    'десята',
    'одинадцата',
    'дванадцата',
  ],
};
export const phrases = {
  ru: {
    half: 'Половина',
    without: 'Без',
    minute: 'минуты',
    minute2: (n: number) => declineWord(n, 'минут', 'а', 'ы'),
    minute3: (n: number) => declineWord(n, 'минут', 'ы'),
  },
  ua: {
    half: 'Пів',
    without: 'За',
    minute: 'хвилину',
    minute2: (n: number) => declineWord(n, 'хвилин', 'а', 'и'),
    minute3: (n: number) => declineWord(n, 'хвилин', 'у', 'и'),
  },
};
