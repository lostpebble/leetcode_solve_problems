import { lengthOfLongestSubstring } from "./_3_lengthOfLongestSubstring";

describe("_3_lengthOfLongestSubstring", () => {
  it("Should work", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3);
    expect(lengthOfLongestSubstring("bbbbb")).toEqual(1);
    expect(lengthOfLongestSubstring("pwwkew")).toEqual(3);
    expect(lengthOfLongestSubstring("abcajya")).toEqual(5);
    expect(lengthOfLongestSubstring("iyewgnxklhasdiuqwy")).toEqual(15);
    expect(lengthOfLongestSubstring("b")).toEqual(1);
    expect(lengthOfLongestSubstring(" ")).toEqual(1);
    expect(lengthOfLongestSubstring("")).toEqual(0);
    expect(lengthOfLongestSubstring("  ")).toEqual(1);
    expect(lengthOfLongestSubstring("abc")).toEqual(3);
    expect(lengthOfLongestSubstring("  ab")).toEqual(3);
  });
});
