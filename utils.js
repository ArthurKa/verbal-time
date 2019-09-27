'use strict';

const typeOf = v => ({}).toString.call(v).slice(8, -1);

module.exports = {
  typeOf,
  throwIf: {
    notBoolean(obj) {
      for(const key in obj) {
        if(![true, false].includes(obj[key])) {
          throw new Error(`Property "${key}" should be Boolean type.`);
        }
      }
    },
    notAllowedLang(obj) {
      for(const key in obj) {
        const langs = ['ru', 'ua'];
        if(!langs.includes(obj[key])) {
          throw new Error(`Property "${key}" should be one of provided: ${langs.join(', ')}.`);
        }
      }
    },
    notDate(time) {
      if(!(time instanceof Date)) {
        throw new Error('Sorry. Only Date instances are supported.');
      }
    },
    notNumber(obj) {
      for(const key in obj) {
        if(typeOf(obj[key]) !== 'Number' || isNaN(obj[key])) {
          throw new Error(`Property "${key}" should be a number.`);
        }
      }
    },
    notNumberInRange(obj, from, to) {
      this.notNumber(obj);
      for(const key in obj) {
        if(obj[key] < from || to < obj[key]) {
          throw new Error(`Property "${key}" should be in ${from}..${to} range.`);
        }
      }
    },
    notEnumerableProperty(obj, props) {
      const keys = Object.keys(obj);
      for(const prop in props) {
        if(!keys.includes(prop)) {
          throw new Error(`Unknown setting property as "${prop}".`);
        }
      }
    },
  },
};
