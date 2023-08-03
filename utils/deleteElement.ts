import LinkedListProps from "@/models/linkedListProps";
import customToast from "./toasts";

const deleteElement = ({
  value,
  setValue,
  list,
  setList,
  setBeforeAfter,
}: LinkedListProps) => {
  if (value === "") {
    customToast("Pleaes Enter a Value", "error");
    setValue("");
    return;
  }
  if (list.length === 0) {
    customToast("List is Empty", "error");
    setValue("");
    return;
  }
  const index = list.findIndex((item) => item.value === Number(value));
  if (index === -1) {
    customToast(`Element With Value ${value} Not Found`, "error");
    setValue("");
    return;
  }
  setList((prevList) => [
    ...prevList.slice(0, index),
    ...prevList.slice(index + 1),
  ]);
  customToast(
    `Deleted Element at Index ${index} with value ${value}`,
    "success"
  );
  setValue("");
  setBeforeAfter("");
  return;
};

export default deleteElement;
