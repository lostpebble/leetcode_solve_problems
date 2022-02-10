import { longestPalindrome } from "./_5_longestPalindrome";

describe("longestPalindrome", function () {
  it("should work", () => {
    expect(longestPalindrome("asbbsas")).toEqual("asbbsa");
    expect(longestPalindrome("babad")).toEqual("bab");
    expect(longestPalindrome("cbbd")).toEqual("bb");
    expect(longestPalindrome("acbbddbbc")).toEqual("cbbddbbc");
    expect(longestPalindrome("acbbcddcbc")).toEqual("bcddcb");
  });
});
