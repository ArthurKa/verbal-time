'use strict';

const { typeOf, throwIf } = require('./utils.js');
const { exactHours, lessLimitAnd30, more30, phrases } = require('./data.js');

const settings = new function Settings() {
  let _lang = 'ru';
  let _countDownFrom = 30;
  let _spellCountDownMinutes = false;
  let _spellLastMinuteAsWord = true;

  let _spellLastMinuteAsWordIsWarned = false;

  Object.defineProperties(this, {
    apply: {
      value: obj => {
        throwIf.notEnumerableProperty(this, obj);
        for(const key in obj) {
          this[key] = obj[key];
        }
      },
    },

    lang: {
      set: lang => {
        throwIf.notAllowedLang({ lang });
        _lang = lang;
      },
      get: () => _lang,
      enumerable: true,
    },
    countDownFrom: {
      set: countDownFrom => {
        throwIf.notNumberInRange({ countDownFrom }, 0, 60);
        _countDownFrom = Math.round(countDownFrom);
      },
      get: () => _countDownFrom,
      enumerable: true,
    },
    spellCountDownMinutes: {
      set: spellCountDownMinutes => {
        throwIf.notBoolean({ spellCountDownMinutes });
        _spellCountDownMinutes = spellCountDownMinutes;
      },
      get: () => _spellCountDownMinutes,
      enumerable: true,
    },
    spellLastMinuteAsWord: {
      set: spellLastMinuteAsWord => {
        throwIf.notBoolean({ spellLastMinuteAsWord });
        if(!_spellLastMinuteAsWordIsWarned && this.spellCountDownMinutes) {
          console.warn('Note: there is no sence to change "spellLastMinuteAsWord" setting value because "spellCountDownMinutes" is true.');
          _spellLastMinuteAsWordIsWarned = true;
        }
        _spellLastMinuteAsWord = spellLastMinuteAsWord;
      },
      get: () => _spellLastMinuteAsWord,
      enumerable: true,
    },
  });
};

function verbalTime(time = new Date()) {
  if(typeOf(time) === 'Object') {
    settings.apply(time);
    return verbalTime;
  }
  throwIf.notDate(time);

  const h = time.getHours();
  const m = time.getMinutes();
  const { lang } = settings;
  const ph = phrases[lang];

  if(m === 0) {
    return exactHours[lang][h];
  }
  if(m === 30) {
    return `${ph.half} ${lessLimitAnd30[lang][(h+1)%12]}`;
  }
  if(m < settings.countDownFrom) {
    return `${m} ${ph.minute2(m)} ${lessLimitAnd30[lang][(h+1)%12]}`;
  }

  const m60 = 60-m;
  if(settings.spellCountDownMinutes) {
    return `${ph.without} ${m60} ${ph.minute3(m60)} ${more30[lang][h%12]}`;
  }
  if(settings.spellLastMinuteAsWord && m60 === 1) {
    return `${ph.without} ${ph.minute} ${more30[lang][h%12]}`;
  }
  return `${ph.without} ${m60} ${more30[lang][h%12]}`;
}

module.exports = verbalTime;
