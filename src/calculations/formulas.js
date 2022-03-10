
export function sum(a, b) {
    return Number(a) + Number(b);
}
export function subtraction(a, b) {
    return Number(a) - Number(b);
}
export function multiplication(a, b) {
    return Number(a) * Number(b);
}
export function division(a, b) {
    return Number(a) / Number(b);
}
export function root(a) {
    return Math.sqrt(Number(a)).toFixed(2);
}
export function percent(a) {
    return Number(a) / 100;
}
export function sumPercent(a, b) {
    return Number(a) + ((Number(a) * Number(b)) / 100);
}
export function subtractionPercent(a, b) {
    return Number(a) - ((Number(a) * Number(b)) / 100);
}
