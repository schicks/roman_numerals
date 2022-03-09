import { toNumber } from ".";

it.each([["I", 1]] as [string, number][])(
  "should map %p to %p",
  (roman, numeral) => {
    expect(toNumber(roman)).toBe(numeral);
  }
);
