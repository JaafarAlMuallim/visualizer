import LinkedListProps from "@/models/linkedListProps";
import customToast from "./toasts";

const deleteHead = ({ list, setValue, setList }: LinkedListProps) => {
  if (list.length === 0) {
    customToast("List is Empty", "error");
    setValue("");
    return;
  }
  const value = list[0];
  setList((prevList) => prevList.slice(1));
  customToast(`Deleted ${value} From Head`, "success");
  setValue("");
  return;
};
export default deleteHead;
