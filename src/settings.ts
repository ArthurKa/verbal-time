import { throwIf } from './utils';

export interface IParams {
  lang: 'ru' | 'ua';
  countDownFrom: number;
  spellCountDownMinutes: boolean;
  spellLastMinuteAsWord: boolean;
}
interface ISettings extends IParams {
  apply(obj: Partial<IParams>): void | never;
}

const Settings = function() {
  let _lang: IParams['lang'] = 'ru';
  let _countDownFrom: IParams['countDownFrom'] = 30;
  let _spellCountDownMinutes: IParams['spellCountDownMinutes'] = false;
  let _spellLastMinuteAsWord: IParams['spellLastMinuteAsWord'] = true;
  let _spellLastMinuteAsWordIsWarned = false;

  const res = {} as ISettings;
  Object.defineProperties(res, {
    apply: {
      value: (obj: Partial<IParams>) => {
        throwIf.notEnumerableProperty(res, obj);

        for(const key in obj) {
          const k = key as keyof IParams;
          const val = obj[k];
          if(val !== undefined) {
            // @ts-ignore
            res[k] = val;
          }
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
        if(!_spellLastMinuteAsWordIsWarned && res.spellCountDownMinutes) {
          console.warn('Note: there is no sence to change "spellLastMinuteAsWord" setting value because "spellCountDownMinutes" is true.');
          _spellLastMinuteAsWordIsWarned = true;
        }
        _spellLastMinuteAsWord = spellLastMinuteAsWord;
      },
      get: () => _spellLastMinuteAsWord,
      enumerable: true,
    },
  });

  return res;
} as any as new () => ISettings;

export const settings = new Settings();
