import { toast } from "@/components/ui/use-toast";
import LinkedListProps from "@/models/linkedListProps";

const addAfter = ({
  value,
  beforeAfter,
  setValue,
  setBeforeAfter,
  list,
  setList,
}: LinkedListProps) => {
  if (value === "") {
    toast({
      title: "Error",
      description: "Please enter a value",
      duration: 1000,
      className: "bg-red-700 text-white border-2 border-red-700",
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
      className: "bg-red-700 text-white border-2 border-red-700",
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
      className: "bg-red-700 text-white border-2 border-red-700",
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
      className: "bg-red-700 text-white border-2 border-red-700",
    });
    setValue("");
    setBeforeAfter("");
    return;
  }

  setList((prevList) => [
    ...prevList.slice(0, index + 1),
    Number(value),
    ...prevList.slice(index + 1),
  ]);
  toast({
    title: "Success",
    description: "Added after",
    duration: 1000,
    className: "bg-green-700 text-white border-2 border-green-700",
  });
  setValue("");
  setBeforeAfter("");
  return;
};

export default addAfter;
