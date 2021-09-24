import * as expect from 'expect';

type answer_1 = 64 extends number ? true : false;
console.log(true);

type answer_2 = number extends 64 ? true : false;
console.log(false);

type answer_3 = string[] extends any ? true : false;
console.log(true);

type answer_4 = string[] extends any[] ? true : false;
console.log(true);

type answer_5 = never extends any ? true : false;
console.log(true);

type answer_6 = any extends any ? true : false;
console.log(true);

type answer_7 = Date extends { new (...args: any[]): any } ? true : false;
console.log(false);

type answer_8 = typeof Date extends { new (...args: any[]): any }
  ? true
  : false;
console.log(true);
