import { sum, subtraction, multiplication, division, root, percent, sumPercent, subtractionPercent } from './formulas';


var calculationSigns = ['+', '-', '×', '/', '%', '√'];
function arrayСonstructor(str) {
    var stringWithSpaces = '';
    for (var i = 0; i < str.length; i++) {
        if (calculationSigns.includes(str[i])) {
            stringWithSpaces += " ".concat(str[i], " ");
        }
        else {
            stringWithSpaces += (str[i]);
        }
    }
    return stringWithSpaces.split(' ');
}
function emptyCellRemover(arr) {
    var result = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        if (item !== undefined) {
            result.push(item);
        }
    }
    return result;
}
function calculator(str) {
    var commaSubstitution = str.replace(/,/gi, '.');
    var arr = arrayСonstructor(commaSubstitution);
    if (!!arr.includes('√')) {
        arr[0] = `${root(arr[0])}`;
        delete arr[1];
        delete arr[2];
        arr = emptyCellRemover(arr);
    }
    if (!!arr.includes('%')) {
        if (arr.length <= 3) {
            arr[0] = `${percent(arr[0])}`;
            delete arr[1];
            delete arr[2];
            arr = emptyCellRemover(arr);
        }
        else {
            (arr[1] === '-') ? arr[0] = `${subtractionPercent(arr[0], arr[2])}` : arr[0] = `${sumPercent(arr[0], arr[2])}`;
            delete arr[1];
            delete arr[2];
            delete arr[3];
            delete arr[4];
            arr = emptyCellRemover(arr);
        }
    }
    while (!!arr.includes('/') || !!arr.includes('×')) { //цикл работает пока в массиве есть умножение и деление
        for (var i = 0; i <= arr.length; i++) {
            if (arr[i] === '×') {
                arr[i] = `${multiplication(arr[i - 1], arr[i + 1])}`;
                delete arr[i - 1];
                delete arr[i + 1];
                arr = emptyCellRemover(arr);
            }
            else if (arr[i] === '/') {
                arr[i] = `${division(arr[i - 1], arr[i + 1])}`;
                delete arr[i - 1];
                delete arr[i + 1];
                arr = emptyCellRemover(arr);
            }
        }
    }
    while (arr.length > 1) { // цикл работает пока не выполняться все вычетания и сложения
        for (var i = 0; i <= arr.length; i++) {
            if (arr[i] === '+') {
                arr[i] = `${sum(arr[i - 1], arr[i + 1])}`;
                delete arr[i - 1];
                delete arr[i + 1];
                arr = emptyCellRemover(arr);
            }
            else if (arr[i] === '-') {
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


