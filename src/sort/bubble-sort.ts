export const bubbleSort = (numbers: number[], desc = true): number[] => {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
      if ((desc && numbers[j] > numbers[j + 1]) || numbers[j] < numbers[j + 1]) {
        let temp: number;
        temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }

  return numbers;
};
