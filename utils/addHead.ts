import { toast } from "@/components/ui/use-toast";
import LinkedListProps from "@/models/linkedListProps";
import customToast from "./toasts";

const addHead = ({ value, setList, setValue, list }: LinkedListProps) => {
  if (value === "") {
    customToast("Please Enter a Value", "error");
    return;
  }
  if (list.includes(Number(value))) {
    customToast(`Element With Value ${value} Already Exists`, "error");
    setValue("");
    return;
  }
  setList((prevList) => [Number(value), ...prevList]);
  customToast(`Added ${value} To Head`, "success");
  setValue("");
  return;
};
export default addHead;
