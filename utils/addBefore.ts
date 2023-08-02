import LinkedListProps from "@/models/linkedListProps";
import customToast from "./toasts";

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
  if (list.includes(Number(value))) {
    customToast(`Element With Value ${value} Already Exists`, "error");
    setValue("");
    setBeforeAfter("");
    return;
  }
  const index = list.indexOf(Number(beforeAfter));
  if (index === -1) {
    customToast(`Element with value ${beforeAfter} Not Found`, "error");
    setValue("");
    setBeforeAfter("");
    return;
  }
  setList((prevList) => [
    ...prevList.slice(0, index),
    Number(value),
    ...prevList.slice(index),
  ]);
  customToast(`Added Before Index ${index}`, "success");
  setValue("");
  setBeforeAfter("");
  return;
};

export default addBefore;
