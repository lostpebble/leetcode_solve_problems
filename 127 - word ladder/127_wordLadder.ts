export function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  const wordSet = new Set(wordList);

  if (!wordSet.has(endWord)) {
    return 0;
  }

  const wordLength = beginWord.length;

  const wordLinkHash: {
    [wordWithGap: string]: Set<string>;
  } = {};

  for (const word of wordList) {
    for (let i = 0; i < wordLength; i += 1) {
      const wordWithGap = word.slice(0, i) + "_" + word.slice(i + 1);
      if (!wordLinkHash.hasOwnProperty(wordWithGap)) {
        wordLinkHash[wordWithGap] = new Set<string>();
      }

      wordLinkHash[wordWithGap].add(word);
    }
  }

  let queue = [beginWord];
  let steps = 1;

  while (queue.length) {
    const next = [];

    for (let word of queue) {
      if (word === endWord) {
        return steps;
      }
    }

    queue = next;
    steps += 1;
  }

  return 0;
}
