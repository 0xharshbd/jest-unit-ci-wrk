const Calculator = require("./calculator");

describe("Calculator", () => {
  const calculator = new Calculator();
  test("should add two numbers", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test("should subtract two numbers", () => {
    expect(calculator.subtract(1, 2)).toBe(-0);
  });

  test("should multiply two numbers", () => {
    expect(calculator.multiply(1, 2)).toBe(2);
  });

  test("should divide two numbers", () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
  });

  test("should throw an error if dividing by zero", () => {
    expect(() => calculator.divide(1, 0)).toThrow("Cannot divide by zero");
  });
});
