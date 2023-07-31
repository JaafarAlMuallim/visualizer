import LinkedListProps from "@/models/linkedListProps";
import { errorStyle, successStyle } from "./constants";
import { toast } from "@/components/ui/use-toast";

const deleteHead = ({ list, setValue, setList }: LinkedListProps) => {
  if (list.length === 0) {
    toast({
      title: "Error",
      description: "List is empty",
      duration: 1000,
      className: errorStyle,
    });
    setValue("");
    return;
  }
  setList((prevList) => prevList.slice(1));
  toast({
    title: "Success",
    description: "Deleted from head",
    duration: 1000,
    className: successStyle,
  });
  setValue("");
  return;
};
export default deleteHead;
