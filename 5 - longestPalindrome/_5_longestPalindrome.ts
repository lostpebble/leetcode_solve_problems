export function longestPalindrome(s: string): string {
  let longest = s[0];
  let minSearchLength = 1;

  for (let i = 0; i < s.length; i++) {
    if (s.length - i <= longest.length) {
      break;
    }

    for (let j = minSearchLength; j < s.length - i; j++) {
      if (j < minSearchLength) {
        continue;
      }

      const straddleIndex = i + j - 1;

      if (s.length - i <= straddleIndex + minSearchLength) {
        break;
      }

      let straddleFailed = false;
      let mirrorFailed = false;

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
