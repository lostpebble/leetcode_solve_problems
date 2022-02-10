export function lengthOfLongestSubstring(s: string): number {
  const seenIndexes: {
    [letter: string]: number;
  } = {};

  let curLowIndex = 0;
  let longest = 0;

  for (let i = 0; i < s.length; i += 1) {
    if ((seenIndexes[s[i]] ?? -1) >= curLowIndex) {
      curLowIndex = seenIndexes[s[i]] + 1;
    }

    seenIndexes[s[i]] = i;

    if (i + 1 - curLowIndex > longest) {
      longest = i + 1 - curLowIndex;
    }
  }

  return longest;
}
