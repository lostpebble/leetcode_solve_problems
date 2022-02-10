import { removeDuplicates } from "./_80_removeDuplicatesFromSortedArray2";

describe("_80_removeDuplicatesFromSortedArray2", () => {
  it("Should work", () => {
    expect(removeDuplicates([1, 1, 1, 2, 2, 3])).toEqual(5);
    // expect(removeDuplicates([])).toEqual(0);
    expect(removeDuplicates([1])).toEqual(1);
    expect(removeDuplicates([1, 1])).toEqual(2);
    expect(
      removeDuplicates([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
    ).toEqual(2);
    expect(removeDuplicates([-100000000, 1])).toEqual(2);
    expect(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3])).toEqual(7);
    expect(removeDuplicates([-100, -20, -20, -20, 0, 1, 1, 2, 3, 3])).toEqual(
      9
    );
  });
});
