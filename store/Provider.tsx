"use client";

import { Algo, Settings, initialValue } from "@/models/contextTypes";
import { ReactNode, useEffect, useState } from "react";
import { itemsContext, settingsContext } from "./contexts";
import { insertionSortAnimations } from "@/algorithms/insertionSort";
import { animateDivs, animateMerge } from "@/algorithms/animate";
import { quickSortAnimations } from "@/algorithms/quickSort";
import { getMergeSortAnimations } from "@/algorithms/mergeSort";

const Provider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<Settings>(initialValue);
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    const randNums: number[] = [];
    for (let i = 0; i < settings.arrLength; i++) {
      randNums.push(Math.floor(Math.random() * 400));
    }
    setItems(randNums);
  }, [settings.arrLength]);

  const sort = (type: Algo) => {
    switch (type) {
      case "insertion":
        const { newArr, animationArr } = insertionSortAnimations(items);
        animateDivs({ newArr, arr: animationArr, setItems, settings });
        break;
      case "merge":
        const mergeAnim: number[] = [];
        const mergeArr: number[][] = [];
        const mergeNums = [...items];
        getMergeSortAnimations(
          mergeNums,
          mergeAnim,
          mergeArr,
          0,
          items.length - 1
        );
        animateMerge({ newArr: mergeNums, arr: mergeArr, setItems, settings });
        break;
      case "bubble":
        const bubbleAux: number[] = [];
        const bubbleArr: number[][] = [];
        const bubbleNums = [...items];
        // // getMergeSortAnims(bubbleNums, bubbleAux, bubbleArr, 0, items.length - 1);
        // animateMerge({ newArr: nums, arr, setItems, settings });
        break;
      case "quick":
        const { quickSorted, quickSortAnims } = quickSortAnimations(items);
        animateDivs({
          newArr: quickSorted,
          arr: quickSortAnims,
          setItems,
          settings,
        });
        break;
    }
  };
  return (
    <itemsContext.Provider value={{ items, setItems }}>
      <settingsContext.Provider value={{ settings, sort, setSettings }}>
        {children}
      </settingsContext.Provider>
    </itemsContext.Provider>
  );
};
export default Provider;
