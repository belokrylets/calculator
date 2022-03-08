export const sum = (a, b) => Number(a) + Number(b);
export const subtraction = (a, b) => Number(a) - Number(b);
export const multiplication = (a, b) => Number(a) * Number(b);
export const division = (a, b) => Number(a) / Number(b);
export const root = (a) => Math.sqrt(Number(a)).toFixed(2);
export const percent = (a) => Number(a) / 100;
export const sumPercent = (a, b) => {
    return Number(a) + ((Number(a) * Number(b)) / 100);
};
export const subtractionPercent = (a, b) => {
    return Number(a) - ((Number(a) * Number(b)) / 100);
};