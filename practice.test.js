test('capitalize', () => {
  const capitalize = (str) =>  str.charAt(0).toUpperCase() + str.slice(1)

  expect(capitalize("hello")).toBe("Hello")
})

test('reverseString', () => {
  const reverseString = (str) => str.split("").reverse().join("")

  expect(reverseString("hello")).toBe("olleh")
})

test('calculator', () => {
  calc = {
    add: (num1, num2) => num1 + num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2,
    subtract: (num1, num2) => num1 - num2,
  }
  
  expect(calc.add(1,2)).toBe(3)
  expect(calc.multiply(4,2)).toBe(8)
  expect(calc.divide(8,4)).toBe(2)
  expect(calc.subtract(1,2)).toBe(-1)
})