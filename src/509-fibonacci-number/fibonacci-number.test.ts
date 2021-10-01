import fib from "./fibonacci-number";

const cases = [
  [0, 0],
  [1, 1],
  [3, 2],
  [4, 3]
];

describe.skip("fib", () => {
  test.each(cases)("case fib(%s) equals %s", (input, result) => {
    expect(fib(input)).toEqual(result);
  });
});
