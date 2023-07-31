import { toast } from "@/components/ui/use-toast";
import LinkedListProps from "@/models/linkedListProps";
import { errorStyle, successStyle } from "./constants";

const addHead = ({ value, setList, setValue, list }: LinkedListProps) => {
  if (value === "") {
    toast({
      title: "Error",
      description: "Please enter a value",
      duration: 1000,
      className: errorStyle,
    });
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
  setList((prevList) => [Number(value), ...prevList]);
  toast({
    title: "Success",
    description: "Added to head",
    duration: 1000,
    className: successStyle,
  });
  setValue("");
  return;
};
export default addHead;
