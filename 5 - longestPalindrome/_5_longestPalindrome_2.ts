export function longestPalindrome(s: string): string {
  let longest = s[0];

  for (let i = 0; i < s.length; i++) {
    let offset = 0;

    while (offset <= 1) {
      let left = i;
      let right = i + offset;

      while (left >= 0 && right < s.length && s[left] === s[right]) {
        if (right + 1 - left > longest.length) {
          longest = s.slice(left, right + 1);
        }

        left -= 1;
        right += 1;
      }

      offset += 1;
    }
  }

  return longest;
}
