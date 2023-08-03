import LinkedListProps from "@/models/linkedListProps";
import customToast from "./toasts";
import { v4 as uuidv4 } from "uuid";
import StructureNode from "@/models/Node";
const addHead = ({ value, setList, setValue, list }: LinkedListProps) => {
  if (value === "") {
    customToast("Please Enter a Value", "error");
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
  setList((prevList) => [node, ...prevList]);
  customToast(`Added ${value} To Head`, "success");
  setValue("");
  return;
};
export default addHead;
