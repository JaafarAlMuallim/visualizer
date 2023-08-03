import LinkedListProps from "@/models/linkedListProps";
import customToast from "./toasts";
import { v4 as uuidv4 } from "uuid";
import StructureNode from "@/models/Node";

const addAfter = ({
  value,
  beforeAfter,
  setValue,
  setBeforeAfter,
  list,
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

  if (
    list.some((item) => {
      item.value === value;
    })
  ) {
    customToast(`Element With Value ${value} Already Exists`, "error");
    setValue("");
    setBeforeAfter("");
    return;
  }
  // find index of beforeAfter
  const index = list.findIndex((item) => item.value === beforeAfter);
  if (index === -1) {
    customToast(`Element With Value ${beforeAfter} Not Found`, "error");
    setValue("");
    setBeforeAfter("");
    return;
  }
  const node: StructureNode = {
    value: Number(value),
    id: uuidv4(),
  };

  setList((prevList) => [
    ...prevList.slice(0, index + 1),
    node,
    ...prevList.slice(index + 1),
  ]);
  customToast(
    `Added Element With Value ${value} After ${beforeAfter}`,
    "success"
  );
  setValue("");
  setBeforeAfter("");
  return;
};

export default addAfter;
