const qs = (arr: number[], l: number, h: number): void => {
  if (l > h) {
    return;
  }

  const pivotIndex = partition(arr, l, h);

  qs(arr, l, pivotIndex - 1);
  qs(arr, pivotIndex + 1, h);
};

const partition = (arr: number[], l: number, h: number) => {
  const pivot = arr[h];

  let index = l - 1;

  for (let i = l; i < h; i++) {
    if (arr[i] <= pivot) {
      index++;
      const tmp = arr[i];
      arr[i] = arr[index];
      arr[index] = tmp;
    }
  }

  index++;
  arr[h] = arr[index];
  arr[index] = pivot;

  return index;
};

export const quickSort = (array: number[]): number[] => {
  const arr = [...array];
  qs(arr, 0, arr.length - 1);

  return arr;
};

export const quickerSort = (arr: number[], asc = true): number[] => {
  return doQuckerSort(arr, asc);
};

const doQuckerSort = (arr: number[], asc) => {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  const left: number[] = [];
  const right: number[] = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if ((asc && arr[i] < pivot) || (!asc && arr[i] > pivot)) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...doQuckerSort(left, asc), pivot, ...doQuckerSort(right, asc)];
};
