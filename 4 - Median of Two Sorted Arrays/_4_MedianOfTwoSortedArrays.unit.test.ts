import { findMedianSortedArrays } from "./_4_MedianOfTwoSortedArrays";

describe("Median of two sorted arrays", () => {
  it("Should work", () => {
    expect(findMedianSortedArrays([0,0], [0, 0])).toEqual(0);
    expect(findMedianSortedArrays([1, 3], [2])).toEqual(2.0);
    expect(findMedianSortedArrays([1, 2], [3, 4])).toEqual(2.5);
    expect(findMedianSortedArrays([], [3, 4])).toEqual(3.5);
    expect(findMedianSortedArrays([1, 2], [])).toEqual(1.5);
    expect(findMedianSortedArrays([-20], [])).toEqual(-20);
    expect(findMedianSortedArrays([], [-500, 500, 2200, 4500])).toEqual(1350);
    expect(findMedianSortedArrays([-21, 2, 3, 23002, 23045, 900000], [])).toEqual(11502.5);
  });
});
