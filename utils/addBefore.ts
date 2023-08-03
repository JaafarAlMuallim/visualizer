import LinkedListProps from "@/models/linkedListProps";
import customToast from "./toasts";
import StructureNode from "@/models/Node";
import { v4 as uuidv4 } from "uuid";

const addBefore = ({
  value,
  list,
  setValue,
  setBeforeAfter,
  beforeAfter,
  setList,
}: LinkedListProps) => {
  if (value === "") {
    customToast("Please Enter a Value", "error");
    setValue("");
    setBeforeAfter("");
    return;
  }
  if (list.length === 0) {
    customToast("List is Empty", "error");
    setValue("");
    setBeforeAfter("");
    return;
  }
  if (list.some((item) => item.value === Number(value))) {
    customToast(`Element With Value ${value} Already Exists`, "error");
    setValue("");
    setBeforeAfter("");
    return;
  }
  const index = list.findIndex((item) => item.value === Number(beforeAfter));
  if (index === -1) {
    customToast(`Element with value ${beforeAfter} Not Found`, "error");
    setValue("");
    setBeforeAfter("");
    return;
  }
  const node: StructureNode = {
    value: Number(value),
    id: uuidv4(),
  };
  setList((prevList) => [
    ...prevList.slice(0, index),
    node,
    ...prevList.slice(index),
  ]);
  customToast(`Added Before Index ${index}`, "success");
  setValue("");
  setBeforeAfter("");
  return;
};

export default addBefore;
