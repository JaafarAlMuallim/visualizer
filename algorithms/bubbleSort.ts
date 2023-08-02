export const bubbleSortAnimations = (arr: number[]) => {
  const newArr: number[] = [...arr];
  const animationArr: number[][] = [];

  for (let i = 0; i < newArr.length - 1; i++) {
    for (let j = 0; j < newArr.length - i - 1; j++) {
      if (newArr[j] > newArr[j + 1]) {
        animationArr.push([j, j + 1]);
        const tmp = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = tmp;
      }
    }
  }

  return { newArr, animationArr };
};
