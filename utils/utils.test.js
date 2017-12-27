'use strict';

const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', () => {
  let res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');
});

it('should square a number', () => {
  let res = utils.square(3);

  expect(res).toBe(9).toBeA('number');
});
