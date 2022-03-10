import { sum, subtraction, multiplication, division, root, percent, sumPercent, subtractionPercent } from './src/calculations/formulas';

const calculationSigns:string[] = ['+', '-', '×', '/', '%', '√'];

function arrayСonstructor(str: string):string[] {   //преобразует строку из дисплея в массив
    let stringWithSpaces = '';
    for (let i = 0; i < str.length; i++) {
        if (calculationSigns.includes(str[i])) {
            stringWithSpaces += ` ${str[i]} `;
        } else {
            stringWithSpaces += (str[i]);
        }
    }
    return stringWithSpaces.split(' ');
}
function emptyCellRemover(arr: string[]):string[] {   // удаляет из массва пустые ячейки
    const result = [];
    for (const item of arr) {
        if (item !== undefined) {
            result.push(item);
        }
    }
    return result;
}
function calculator(str: string):number {
    const commaSubstitution: string = str.replace(/,/gi, '.');
    var arr: number[] | string[] = arrayСonstructor(commaSubstitution);
    if (!!arr.includes('√')) {
        arr[0] = root(arr[0]);
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
        } else {
            (arr[1] === '-') ? arr[0] = `${subtractionPercent(arr[0], arr[2])}` : arr[0] = `${sumPercent(arr[0], arr[2])}`;
            delete arr[1];
            delete arr[2];
            delete arr[3];
            delete arr[4];
            arr = emptyCellRemover(arr);
        }
    }
    while (!!arr.includes('/') || !!arr.includes('×')) { //цикл работает пока в массиве есть умножение и деление
        for (let i = 0; i <= arr.length; i++) {
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
        for (let i = 0; i <= arr.length; i++) {
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
