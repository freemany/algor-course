export const binarySearch = (haystack, needle) => {
  let l = 0,
    h = haystack.length,
    m;
  do {
    m = Math.floor((l + h) / 2);

    if (haystack[m] === needle) {
      return true;
    }
    if (needle < haystack[m]) {
      h = m;
    } else {
      l = m + 1;
    }
  } while (l < h);

  return false;
};
