import { longestPalindrome } from "./_5_longestPalindrome";
import { longestPalindrome as long2 } from "./_5_longestPalindrome_2";

describe("longestPalindrome", function () {
  it("should work", () => {
    expect(longestPalindrome("asbbsas")).toEqual("asbbsa");
    expect(longestPalindrome("babad")).toEqual("bab");
    expect(longestPalindrome("cbbd")).toEqual("bb");
    expect(longestPalindrome("acbbddbbc")).toEqual("cbbddbbc");
    expect(longestPalindrome("acbbcddcbc")).toEqual("bcddcb");
    expect(longestPalindrome("solos")).toEqual("solos");
    expect(longestPalindrome("bigsolos")).toEqual("solos");
    expect(longestPalindrome("solosbigibsolos")).toEqual("solosbigibsolos");
    expect(longestPalindrome("aaabacchhjotoj")).toEqual("jotoj");
    expect(longestPalindrome("aaabacchhjotojpollop")).toEqual("pollop");
  });

  it("2 should work", () => {
    expect(long2("asbbsas")).toEqual("asbbsa");
    expect(long2("babad")).toEqual("bab");
    expect(long2("cbbd")).toEqual("bb");
    expect(long2("acbbddbbc")).toEqual("cbbddbbc");
    expect(long2("acbbcddcbc")).toEqual("bcddcb");
    expect(long2("solos")).toEqual("solos");
    expect(long2("bigsolos")).toEqual("solos");
    expect(long2("solosbigibsolos")).toEqual("solosbigibsolos");
    expect(long2("aaabacchhjotoj")).toEqual("jotoj");
    expect(long2("aaabacchhjotojpollop")).toEqual("pollop");
  });
});
