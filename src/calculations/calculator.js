import {
  sum, subtraction, multiplication, division, root, percent, sumPercent, subtractionPercent,
} from './formulas';

const calculationSigns = ['+', '-', '×', '/', '%', '√'];
function arrayСonstructor(str) {
  let stringWithSpaces = '';
  for (let i = 0; i < str.length; i += 1) {
    if (calculationSigns.includes(str[i])) {
      stringWithSpaces += ' '.concat(str[i], ' ');
    } else {
      stringWithSpaces += (str[i]);
    }
  }
  return stringWithSpaces.split(' ');
}
function emptyCellRemover(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== undefined) {
      result.push(arr[i]);
    }
  }
  return result;
}
function calculator(str) {
  const commaSubstitution = str.replace(/,/gi, '.');
  let arr = arrayСonstructor(commaSubstitution);
  if (arr.includes('√')) {
    arr[0] = `${root(arr[0])}`;
    delete arr[1];
    delete arr[2];
    arr = emptyCellRemover(arr);
  }
  if (arr.includes('%')) {
    if (arr.length <= 3) {
      arr[0] = `${percent(arr[0])}`;
      delete arr[1];
      delete arr[2];
      arr = emptyCellRemover(arr);
    } else {
      (arr[1] === '-') ? arr[0] = `${subtractionPercent(arr[0], arr[2])}` : arr[0] = `${sumPercent(arr[0], arr[2])}`;
      delete arr[1];
      delete arr[2];
      delete arr[3];
      delete arr[4];
      arr = emptyCellRemover(arr);
    }
  }
  while (!!arr.includes('/') || !!arr.includes('×')) { // цикл работает пока в массиве есть умножение и деление
    for (let i = 0; i <= arr.length; i += 1) {
      if (arr[i] === '×') {
        arr[i] = `${multiplication(arr[i - 1], arr[i + 1])}`;
        delete arr[i - 1];
        delete arr[i + 1];
        arr = emptyCellRemover(arr);
      } else if (arr[i] === '/') {
        arr[i] = `${division(arr[i - 1], arr[i + 1])}`;
        delete arr[i - 1];
        delete arr[i + 1];
        arr = emptyCellRemover(arr);
      }
    }
  }
  while (arr.length > 1) { // цикл работает пока не выполняться все вычетания и сложения
    for (let i = 0; i <= arr.length; i += 1) {
      if (arr[i] === '+') {
        arr[i] = `${sum(arr[i - 1], arr[i + 1])}`;
        delete arr[i - 1];
        delete arr[i + 1];
        arr = emptyCellRemover(arr);
      } else if (arr[i] === '-') {
        arr[i] = `${subtraction(arr[i - 1], arr[i + 1])}`;
        delete arr[i - 1];
        delete arr[i + 1];
        arr = emptyCellRemover(arr);
      }
    }
  }
  return Number(arr[0]);
}
export default calculator;
