export function sum(a: string, b: string):number {
    return Number(a) + Number(b);
}
export function subtraction(a: string, b: string):number {
    return Number(a) - Number(b);
}
export function multiplication(a: string, b: string):number {
    return Number(a) * Number(b);
}
export function division(a: string, b: string):number {
    return Number(a) / Number(b);
}
export function root(a: string):number {
    return Math.sqrt(Number(a));
}
export function percent(a):number {
    return Number(a) / 100;
}
export function sumPercent(a: string, b: string):number {
    return Number(a) + ((Number(a) * Number(b)) / 100);
}
export function subtractionPercent(a: string, b: string):number {
    return Number(a) - ((Number(a) * Number(b)) / 100);
}