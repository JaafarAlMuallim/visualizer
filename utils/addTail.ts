import LinkedListProps from "@/models/linkedListProps";
import customToast from "./toasts";
import StructureNode from "@/models/Node";
import { v4 as uuidv4 } from "uuid";

const addTail = ({ value, setValue, setList, list }: LinkedListProps) => {
  if (value === "") {
    customToast("Please Enter a Value", "error");
    setValue("");
    return;
  }
  if (list.some((item) => item.value === Number(value))) {
    customToast(`Element With Value ${value} Already Exists`, "error");
    setValue("");
    return;
  }
  const node: StructureNode = {
    value: Number(value),
    id: uuidv4(),
  };
  setList((prevList) => [...prevList, node]);
  customToast(`Added ${value} To Tail`, "success");
  setValue("");
  return;
};
export default addTail;
