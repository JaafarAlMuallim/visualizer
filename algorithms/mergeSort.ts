const merge = (
  items: number[],
  helper: number[],
  animationArray: number[][],
  low: number,
  mid: number,
  high: number
) => {
  for (let k = low; k <= high; k++) {
    helper[k] = items[k];
  }

  let i = low,
    j = mid + 1;
  for (let k = low; k <= high; k++) {
    if (i > mid) {
      animationArray.push([helper[j], k]);
      items[k] = helper[j++];
    } else if (j > high) {
      animationArray.push([helper[i], k]);
      items[k] = helper[i++];
    } else if (helper[i] <= helper[j]) {
      animationArray.push([helper[i], k]);
      items[k] = helper[i++];
    } else {
      animationArray.push([helper[j], k]);
      items[k] = helper[j++];
    }
  }
};

export const mergeSortAnimations = (
  items: number[],
  helper: number[],
  animationArr: number[][],
  low: number,
  high: number
) => {
  if (low >= high) return;

  const mid = low + Math.floor((high - low) / 2);

  mergeSortAnimations(items, helper, animationArr, low, mid);
  mergeSortAnimations(items, helper, animationArr, mid + 1, high);
  merge(items, helper, animationArr, low, mid, high);
};
