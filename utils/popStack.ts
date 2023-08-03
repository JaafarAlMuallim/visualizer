import StructureNode from "@/models/Node";
import customToast from "./toasts";

type props = {
  list: StructureNode[];
  setList: React.Dispatch<React.SetStateAction<StructureNode[]>>;
};

export default function popStack({ list, setList }: props) {
  if (list.length === 0) {
    customToast("Stack is Empty", "error");
  } else {
    setList((prevList) => prevList.slice(1));
    customToast("Value Removed From Stack", "success");
  }
  return;
}
