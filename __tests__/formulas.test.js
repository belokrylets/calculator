import { test, expect } from '@jest/globals';
import { sum, subtraction, multiplication, division, root, percent, sumPercent, subtractionPercent } from '../src/calculations/formulas';
test('sum', () => {
  expect(sum('5', '10')).toEqual(15);
  expect(sum('-5', '10')).toEqual(5);
});

test('subtraction', () => {
  expect(subtraction('5', '10')).toEqual(-5);
  expect(subtraction('-5', '10')).toEqual(-15);
});

test('multiplication', () => {
  expect(multiplication('5', '10')).toEqual(50);
  expect(multiplication('5', '0')).toEqual(0);
});

test('division', () => {
  expect(division('50', '5')).toEqual(10);
  expect(division('5', '5')).toEqual(1);
});

test('root', () => {
  expect(root('9')).toEqual(3);
  expect(root('8')).toEqual(2.83);
});

test('percent', () => {
  expect(percent('99')).toEqual(0.99);
  expect(percent('101')).toEqual(1.01);
});

test('sumPercent', () => {
  expect(sumPercent('88', '13')).toEqual(76.56);
});

test('subtractionPercent', () => {
  expect(subtractionPercent('88', '13')).toEqual(99.44);
});