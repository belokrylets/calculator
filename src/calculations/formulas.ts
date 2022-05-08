export const sum = (a: number, b: number): number => {
  return a + b;
}
export const subtraction = (a: number, b: number): number => {
  return a - b;
}
export const multiplication = (a: number, b: number): number => {
  return a * b;
}
export const division = (a: number, b: number): number => {
  return a / b;
}
export const root = (a: number): number => {
  return Math.sqrt(a);
}
export const percent = (a: number): number => {
  return a / 100;
}
export const sumPercent = (a: number, b: number): number => {
  return a + ((a * b) / 100);
}
export const subtractionPercent = (a: number, b: number): number => {
  return a - ((a * b) / 100);
}
