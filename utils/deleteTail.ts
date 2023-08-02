import { toast } from "@/components/ui/use-toast";
import LinkedListProps from "@/models/linkedListProps";

const deleteTail = ({ list, setValue, setList }: LinkedListProps) => {
  if (list.length === 0) {
    toast({
      title: "Error",
      description: "List is empty",
      duration: 1000,
      className: "bg-red-700 text-white border-2 border-red-700",
    });
    setValue("");
    return;
  }
  setList((prevList) => prevList.slice(0, prevList.length - 1));
  toast({
    title: "Success",
    description: "Deleted from tail",
    duration: 1000,
    className: "bg-green-700 text-white border-2 border-green-700",
  });
  setValue("");
  return;
};

export default deleteTail;
