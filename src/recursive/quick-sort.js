export const quickSort = (arr, asc = true) => {
  return doQuckSort(arr, asc);
};

const doQuckSort = (arr, asc) => {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if ((asc && arr[i] < pivot) || (!asc && arr[i] > pivot)) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...doQuckSort(left, asc), pivot, ...doQuckSort(right, asc)];
};
