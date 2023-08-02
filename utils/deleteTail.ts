import { toast } from "@/components/ui/use-toast";
import LinkedListProps from "@/models/linkedListProps";
import customToast from "./toasts";

const deleteTail = ({ list, setValue, setList }: LinkedListProps) => {
  if (list.length === 0) {
    customToast("List is Empty", "error");
    setValue("");
    return;
  }
  const value = list[list.length - 1];
  setList((prevList) => prevList.slice(0, prevList.length - 1));
  customToast(`Deleted ${value} From Tail`, "success");
  setValue("");
  return;
};

export default deleteTail;
