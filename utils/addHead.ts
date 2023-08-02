import { toast } from "@/components/ui/use-toast";
import LinkedListProps from "@/models/linkedListProps";

const addHead = ({ value, setList, setValue, list }: LinkedListProps) => {
  if (value === "") {
    toast({
      title: "Error",
      description: "Please enter a value",
      duration: 1000,
      className: "bg-red-700 text-white border-2 border-red-700",
    });
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
    return;
  }
  setList((prevList) => [Number(value), ...prevList]);
  toast({
    title: "Success",
    description: "Added to head",
    duration: 1000,
    className: "bg-green-700 text-white border-2 border-green-700",
  });
  setValue("");
  return;
};
export default addHead;
