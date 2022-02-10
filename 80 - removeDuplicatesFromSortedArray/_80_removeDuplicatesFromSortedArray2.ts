export function removeDuplicates(nums: number[]): number {
  let insertIndex = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (i < 2 || nums[insertIndex - 2] !== nums[i]) {
      nums[insertIndex] = nums[i];
      insertIndex++;
    }
  }

  return insertIndex;
}
