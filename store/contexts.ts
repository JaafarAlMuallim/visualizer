"use client";
import { Algo, ISettingsContext, initialValue } from "@/models/contextTypes";

import { ReactNode, createContext, useEffect, useState } from "react";

const settingsContext = createContext<ISettingsContext>({
  settings: initialValue,
  sort: (type: Algo) => {},
});

export type Items = {
  items: number[];
  setItems?: React.Dispatch<React.SetStateAction<number[]>>;
};

const itemsContext = createContext<Items>({ items: [] });
export { itemsContext, settingsContext };
