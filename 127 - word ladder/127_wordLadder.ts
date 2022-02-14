export function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[]
): number {
  const wordSet = new Set(wordList);

  if (!wordSet.has(endWord)) {
    return 0;
  }

  const wordLength = beginWord.length;

  const wordStepIndex: {
    [wordWithGap: string]: string[];
  } = {};

  for (const word of wordList) {
    for (let i = 0; i < wordLength; i += 1) {
      const wordWithGap = word.slice(0, i) + "_" + word.slice(i + 1);
      if (!wordStepIndex.hasOwnProperty(wordWithGap)) {
        wordStepIndex[wordWithGap] = [];
      }

      wordStepIndex[wordWithGap].push(word);
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

      for (let i = 0; i < wordLength; i += 1) {
        const wordWithGap = word.slice(0, i) + "_" + word.slice(i + 1);

        if (wordStepIndex.hasOwnProperty(wordWithGap)) {
          for (const w of wordStepIndex[wordWithGap]) {
            if (wordSet.has(w)) {
              wordSet.delete(w);
              next.push(w);
            }
          }
        }
      }
    }

    queue = next;
    steps += 1;
  }

  return 0;
}
