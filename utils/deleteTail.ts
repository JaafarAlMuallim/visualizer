import { toast } from "@/components/ui/use-toast";
import LinkedListProps from "@/models/linkedListProps";
import { errorStyle, successStyle } from "./constants";

const deleteTail = ({ list, setValue, setList }: LinkedListProps) => {
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
  setList((prevList) => prevList.slice(0, prevList.length - 1));
  toast({
    title: "Success",
    description: "Deleted from tail",
    duration: 1000,
    className: successStyle,
  });
  setValue("");
  return;
};

export default deleteTail;
