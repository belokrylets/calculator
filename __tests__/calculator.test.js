import calculator from "../src/calculations/calculator";

test('calculator', () => {
    expect(calculator('50+50')).toEqual(100);
    expect(calculator('5+5×5')).toEqual(30);
    expect(calculator('5+5/5')).toEqual(6);
    expect(calculator('5/5×5')).toEqual(5);
    expect(calculator('88-13%')).toEqual(76.56);
    expect(calculator('88+13%')).toEqual(99.44);
    expect(calculator('9√')).toEqual(3);
    expect(calculator('99%')).toEqual(0.99);
  });
  
