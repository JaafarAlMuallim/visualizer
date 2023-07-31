import { toast } from "@/components/ui/use-toast";
import LinkedListProps from "@/models/linkedListProps";
import { errorStyle, successStyle } from "./constants";

const addTail = ({ value, setValue, setList, list }: LinkedListProps) => {
  if (value === "") {
    toast({
      title: "Error",
      description: "Please enter a value",
      duration: 1000,
      className: errorStyle,
    });
    setValue("");
    return;
  }
  if (list.includes(Number(value))) {
    toast({
      title: "Error",
      description: "Element already exists",
      duration: 1000,
      className: errorStyle,
    });
    setValue("");
    return;
  }
  setList((prevList) => [...prevList, Number(value)]);
  toast({
    title: "Success",
    description: "Added to tail",
    duration: 1000,
    className: successStyle,
  });
  setValue("");
  return;
};
export default addTail;
