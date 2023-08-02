import { toast } from "@/components/ui/use-toast";
import LinkedListProps from "@/models/linkedListProps";
import customToast from "./toasts";

const addTail = ({ value, setValue, setList, list }: LinkedListProps) => {
  if (value === "") {
    customToast("Please Enter a Value", "error");
    setValue("");
    return;
  }
  if (list.includes(Number(value))) {
    customToast(`Element With Value ${value} Already Exists`, "error");
    setValue("");
    return;
  }
  setList((prevList) => [...prevList, Number(value)]);
  customToast(`Added ${value} To Tail`, "success");
  setValue("");
  return;
};
export default addTail;
