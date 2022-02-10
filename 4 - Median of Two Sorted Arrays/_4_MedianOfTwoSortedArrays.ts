export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const requiredMoves = Math.floor((len1 + len2) / 2) + 1;

  let cur: number;
  let ind1 = 0;
  let ind2 = 0;

  if (len2 === 0 || (len1 !== 0 && nums1[0] < nums2[0])) {
    cur = nums1[0];
    ind1 = 1;
  } else {
    cur = nums2[0];
    ind2 = 1;
  }

  let prev: number;

  for (let i = 1; i < requiredMoves; i += 1) {
    if (
      (ind1 < len1 && ind2 < len2 && nums1[ind1] < nums2[ind2]) ||
      (ind1 < len1 && ind2 >= len2)
    ) {
      prev = cur;
      cur = nums1[ind1++];
    } else {
      prev = cur;
      cur = nums2[ind2++];
    }
  }

  if (cur + prev === 0) {
    return 0;
  }

  if ((len1 + len2) % 2 === 0) {
    return (cur + prev) / 2;
  } else {
    return cur;
  }
}
