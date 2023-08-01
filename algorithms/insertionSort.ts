export const insertionSortAnimations = (arr: number[]) => {
  const newArr: number[] = [...arr];
  const animationArr: number[][] = [];
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && newArr[j] < newArr[j - 1]) {
      animationArr.push([j - 1, j]);
      const tmp = newArr[j - 1];
      newArr[j - 1] = newArr[j];
      newArr[j] = tmp;
      j--;
    }
  }
  return { newArr, animationArr };
};
