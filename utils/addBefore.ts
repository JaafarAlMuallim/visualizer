import { toast } from "@/components/ui/use-toast";
import { errorStyle, successStyle } from "./constants";
import LinkedListProps from "@/models/linkedListProps";

const addBefore = ({
  value,
  list,
  setValue,
  setBeforeAfter,
  beforeAfter,
  setList,
}: LinkedListProps) => {
  if (value === "") {
    toast({
      title: "Error",
      description: "Please enter a value",
      duration: 1000,
      className: errorStyle,
    });
    setValue("");
    setBeforeAfter("");
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
    setBeforeAfter("");
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
    setBeforeAfter("");
    return;
  }
  const index = list.indexOf(Number(beforeAfter));
  if (index === -1) {
    toast({
      title: "Error",
      description: "Element not found",
      duration: 1000,
      className: errorStyle,
    });
    setValue("");
    setBeforeAfter("");
    return;
  }
  setList((prevList) => [
    ...prevList.slice(0, index),
    Number(value),
    ...prevList.slice(index),
  ]);
  toast({
    title: "Success",
    description: "Added before",
    duration: 1000,
    className: successStyle,
  });
  setValue("");
  setBeforeAfter("");
  return;
};

export default addBefore;
