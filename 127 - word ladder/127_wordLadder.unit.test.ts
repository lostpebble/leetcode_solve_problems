import { ladderLength } from "./127_wordLadder";

describe("127 Word ladder", () => {
  it("Should work", () => {
    expect(
      ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
    ).toEqual(5);
    expect(
      ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"])
    ).toEqual(0);
  });
});
