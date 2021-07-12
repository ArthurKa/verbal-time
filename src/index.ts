import { throwIf } from './utils';
import { exactHours, lessLimitAnd30, more30, phrases } from './data';
import { settings, IParams } from './settings';

export default function verbalTime(time: Date | Partial<IParams> = new Date()) {
  if(!(time instanceof Date)) {
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
    return `${ph.half} ${lessLimitAnd30[lang][(h + 1) % 12]}`;
  }
  if(m < settings.countDownFrom) {
    return `${m} ${ph.minute2(m)} ${lessLimitAnd30[lang][(h + 1) % 12]}`;
  }

  const m60 = 60 - m;
  if(settings.spellCountDownMinutes) {
    return `${ph.without} ${m60} ${ph.minute3(m60)} ${more30[lang][h % 12]}`;
  }
  if(settings.spellLastMinuteAsWord && m60 === 1) {
    return `${ph.without} ${ph.minute} ${more30[lang][h % 12]}`;
  }
  return `${ph.without} ${m60} ${more30[lang][h % 12]}`;
}
