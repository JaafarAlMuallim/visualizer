import LinkedListProps from "@/models/linkedListProps";
import customToast from "./toasts";

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
  if (list.includes(Number(value))) {
    customToast(`Element With Value ${value} Already Exists`, "error");
    setValue("");
    setBeforeAfter("");
    return;
  }
  const index = list.indexOf(Number(beforeAfter));
  if (index === -1) {
    customToast(`Element With Value ${beforeAfter} Not Found`, "error");
    setValue("");
    setBeforeAfter("");
    return;
  }

  setList((prevList) => [
    ...prevList.slice(0, index + 1),
    Number(value),
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
