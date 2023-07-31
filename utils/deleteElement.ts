import { toast } from "@/components/ui/use-toast";
import LinkedListProps from "@/models/linkedListProps";
import { errorStyle, successStyle } from "./constants";

const deleteElement = ({
  value,
  setValue,
  list,
  setList,
  setBeforeAfter,
}: LinkedListProps) => {
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
  const index = list.indexOf(Number(value));
  if (index === -1) {
    toast({
      title: "Error",
      description: "Element not found",
      duration: 1000,
      className: errorStyle,
    });
    setValue("");
    return;
  }
  setList((prevList) => [
    ...prevList.slice(0, index),
    ...prevList.slice(index + 1),
  ]);
  toast({
    title: "Success",
    description: "Deleted element",
    duration: 1000,
    className: successStyle,
  });
  setValue("");
  setBeforeAfter("");
  return;
};

export default deleteElement;
