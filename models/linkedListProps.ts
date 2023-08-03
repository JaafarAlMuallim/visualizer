import { Dispatch, SetStateAction } from "react";
import StructureNode from "./Node";

export default interface LinkedListProps {
  value: string;
  beforeAfter: string;
  setValue: Dispatch<SetStateAction<string>>;
  setBeforeAfter: Dispatch<SetStateAction<string>>;
  list: StructureNode[];
  setList: Dispatch<SetStateAction<StructureNode[]>>;
}
