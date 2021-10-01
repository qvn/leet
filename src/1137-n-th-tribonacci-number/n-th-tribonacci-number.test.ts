import { tribonacci } from "./n-th-tribonacci-number";

const cases = [
  [4, 4],
  [25, 1389537]
];

describe.skip("tribonacci", () => {
  test.each(cases)("tribonacci(%s) = %s", (input, output) =>
    expect(tribonacci(input)).toEqual(output)
  );
});
