'use strict';

const { typeOf, throwIf } = require('./utils.js');
const { exactHours, lessLimitAnd30, more30, phrases } = require('./data.js');

const settings = new function Settings() {
  let _lang = 'ru';
  let _countDownFrom = 30;
  let _spellCountDownMinutes = false;
  let _spellLastMinute = true;

  let _spellLastMinutethisWarned = false;

  Object.defineProperties(this, {
    lang: {
      set: lang => {
        throwIf.notAllowedLang({ lang });
        _lang = lang;
      },
      get: () => _lang,
    },
    countDownFrom: {
      set: countDownFrom => {
        throwIf.notNumberInRange({ countDownFrom }, 0, 60);
        _countDownFrom = Math.round(countDownFrom);
      },
      get: () => _countDownFrom,
    },
    spellCountDownMinutes: {
      set: spellCountDownMinutes => {
        throwIf.notBoolean({ spellCountDownMinutes });
        _spellCountDownMinutes = spellCountDownMinutes;
      },
      get: () => _spellCountDownMinutes,
    },
    spellLastMinute: {
      set: spellLastMinute => {
        throwIf.notBoolean({ spellLastMinute });
        if(!_spellLastMinutethisWarned && this.spellCountDownMinutes) {
          console.warn('Note: there is no sence to change "spellLastMinute" setting value because "spellCountDownMinutes" is true.');
          _spellLastMinutethisWarned = true;
        }
        _spellLastMinute = spellLastMinute;
      },
      get: () => _spellLastMinute,
    },
  });

  this.apply = obj => {
    for(const key in obj) {
      this[key] = obj[key];
    }
  };
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

  const m2 = 60-m;
  if(settings.spellCountDownMinutes) {
    return `${ph.without} ${m2} ${ph.minute3(m2)} ${more30[lang][h%12]}`;
  }
  if(settings.spellLastMinute && m2 === 1) {
    return `${ph.without} ${ph.minute} ${more30[lang][h%12]}`;
  }
  return `${ph.without} ${m2} ${more30[lang][h%12]}`;
}

module.exports = verbalTime;
