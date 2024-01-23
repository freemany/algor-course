export const bubbleSort = (numbers, desc = true) => {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
      if ((desc && numbers[j] > numbers[j + 1]) || numbers[j] < numbers[j + 1]) {
        let temp;
        temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }

  return numbers;
};
