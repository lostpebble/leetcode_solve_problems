export function longestPalindrome(s: string): string {
  let longest = s[0];
  let minSearchLength = 1;

  for (let i = 0; i < s.length; i++) {
    for (let j = minSearchLength; j < s.length - i; j++) {
      if (Math.floor(longest.length / 2) > minSearchLength) {
        continue;
      }

      // i = 0; j = 1
      const straddleIndex = i + j - 1; // 0
      let straddleFailed = false;
      let mirrorFailed = false;

      // j = 1
      for (let ii = 1; ii <= j; ii++) {
        if (!straddleFailed) {
          if (
            straddleIndex - ii >= i &&
            s[straddleIndex - ii] === s[straddleIndex + ii]
          ) {
            if (
              longest.length <
              straddleIndex + ii + 1 - (straddleIndex - ii)
            ) {
              longest = s.substring(straddleIndex - ii, straddleIndex + ii + 1);
              minSearchLength = Math.ceil(
                (straddleIndex + ii + 1 - (straddleIndex - ii)) / 2
              );
            }
          } else {
            straddleFailed = true;
          }
        }

        if (!mirrorFailed) {
          if (s[straddleIndex - ii + 1] === s[straddleIndex + ii]) {
            if (
              longest.length <
              straddleIndex + ii + 1 - (straddleIndex - ii + 1)
            ) {
              longest = s.substring(
                straddleIndex - ii + 1,
                straddleIndex + ii + 1
              );
              minSearchLength = Math.ceil(
                (straddleIndex + ii + 1 - (straddleIndex - ii + 1)) / 2
              );
            }
          } else {
            mirrorFailed = true;
          }
        }

        if (straddleFailed && mirrorFailed) {
          break;
        }
      }
    }
  }

  return longest;
}
