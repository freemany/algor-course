export const crystalBall = (breaks: boolean[]): number => {
  const jump = Math.floor(Math.sqrt(breaks.length));
  let i = jump;
  for (; i < breaks.length; i += jump) {
    if (breaks[i]) break;
  }

  for (let j = i - jump; j <= i; j++) {
    if (breaks[j]) return j;
  }

  return -1;
};
