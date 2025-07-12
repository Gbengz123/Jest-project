test('capitalize', () => {
  const capitalize = (str) =>  str.charAt(0).toUpperCase() + str.slice(1)

  expect(capitalize("hello")).toBe("Hello")
})

test('reverseString', () => {
  const reverseString = (str) => str.split("").reverse().join("")

  expect(reverseString("hello")).toBe("olleh")
})

