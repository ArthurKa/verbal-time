export const typeOf = (v: any) => ({}).toString.call(v).slice(8, -1);

export const throwIf = {
  notBoolean(obj: Record<string, any>): void | never {
    for(const key in obj) {
      if(![true, false].includes(obj[key])) {
        throw new Error(`Property "${key}" should be Boolean type.`);
      }
    }
  },
  notAllowedLang(obj: Record<string, any>): void | never {
    for(const key of Object.keys(obj)) {
      const langs = ['ru', 'ua'];
      if(!langs.includes(obj[key])) {
        throw new Error(`Property "${key}" should be one of provided: ${langs.join(', ')}.`);
      }
    }
  },
  notDate(time: Record<string, any>): void | never {
    if(!(time instanceof Date)) {
      throw new Error('Sorry. Only Date instances are supported.');
    }
  },
  notNumber(obj: Record<string, any>): void | never {
    for(const key in obj) {
      if(typeOf(obj[key]) !== 'Number' || Number.isNaN(obj[key])) {
        throw new Error(`Property "${key}" should be a number.`);
      }
    }
  },
  notNumberInRange(obj: Record<string, any>, from: number, to: number): void | never {
    this.notNumber(obj);
    for(const key in obj) {
      if(obj[key] < from || to < obj[key]) {
        throw new Error(`Property "${key}" should be in ${from}..${to} range.`);
      }
    }
  },
  notEnumerableProperty(obj: Record<string, any>, props: Record<string, any>): void | never {
    const keys = Object.keys(obj);
    for(const prop in props) {
      if(!keys.includes(prop)) {
        throw new Error(`Unknown setting property as "${prop}".`);
      }
    }
  },
};
