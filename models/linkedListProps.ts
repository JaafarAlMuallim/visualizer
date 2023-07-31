import { Dispatch, SetStateAction } from "react";

export default interface LinkedListProps {
  value: string;
  beforeAfter: string;
  setValue: Dispatch<SetStateAction<string>>;
  setBeforeAfter: Dispatch<SetStateAction<string>>;
  list: number[];
  setList: Dispatch<SetStateAction<number[]>>;
}
