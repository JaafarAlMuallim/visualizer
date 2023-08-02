export default function reverseAnimation(list: number[]) {
  // reverse linked list using normal list and animation array
  const animationArray: number[][] = [];
  const newList: number[] = [...list];
  let i = 0;
  let j = newList.length - 1;
  while (i < j) {
    animationArray.push([i, j]);
    const tmp = newList[i];
    newList[i] = newList[j];
    newList[j] = tmp;
    i++;
    j--;
  }
  return { newList, animationArray };
}
