export const quickSortAnimations = (items: number[]) => {
  const arr = [...items];
  const animArr: number[][] = [];
  split(arr, animArr, 0, arr.length - 1);
  return { quickSorted: arr, quickSortAnims: animArr };
};

const split = (
  arr: number[],
  animArr: number[][],
  low: number,
  high: number
) => {
  if (low >= high) return;
  let lowest = low;
  let index = low;
  let highest = high;
  const value = arr[low];

  while (index <= highest) {
    if (arr[index] < value) exchange(arr, animArr, index++, lowest++);
    else if (arr[index] > value) exchange(arr, animArr, index, highest--);
    else index++;
  }

  split(arr, animArr, low, lowest - 1);
  split(arr, animArr, highest + 1, high);
};

const exchange = (arr: number[], animArr: number[][], a: number, b: number) => {
  animArr.push([a, b]);
  const tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
};
