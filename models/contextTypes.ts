export type Algo = "insertion" | "bubble" | "quick" | "merge";

export type Settings = {
  type: Algo;
  arrLength: number;
  delay: number;
};

export interface ISettingsContext {
  settings: Settings;
  setSettings?: React.Dispatch<React.SetStateAction<Settings>>;
  sort: (algoType: Algo) => void;
}

export const initialValue: Settings = {
  type: "insertion",
  arrLength: 40,
  delay: 5,
};
