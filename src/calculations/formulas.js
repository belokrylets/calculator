"use strict";
exports.__esModule = true;
exports.subtractionPercent = exports.sumPercent = exports.percent = exports.root = exports.division = exports.multiplication = exports.subtraction = exports.sum = void 0;
function sum(a, b) {
    return Number(a) + Number(b);
}
exports.sum = sum;
function subtraction(a, b) {
    return Number(a) - Number(b);
}
exports.subtraction = subtraction;
function multiplication(a, b) {
    return Number(a) * Number(b);
}
exports.multiplication = multiplication;
function division(a, b) {
    return Number(a) / Number(b);
}
exports.division = division;
function root(a) {
    return Math.sqrt(Number(a)).toFixed(2);
}
exports.root = root;
function percent(a) {
    return Number(a) / 100;
}
exports.percent = percent;
function sumPercent(a, b) {
    return Number(a) + ((Number(a) * Number(b)) / 100);
}
exports.sumPercent = sumPercent;
function subtractionPercent(a, b) {
    return Number(a) - ((Number(a) * Number(b)) / 100);
}
exports.subtractionPercent = subtractionPercent;
