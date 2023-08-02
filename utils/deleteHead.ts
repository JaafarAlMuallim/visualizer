import LinkedListProps from "@/models/linkedListProps";
import { toast } from "@/components/ui/use-toast";

const deleteHead = ({ list, setValue, setList }: LinkedListProps) => {
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
  setList((prevList) => prevList.slice(1));
  toast({
    title: "Success",
    description: "Deleted from head",
    duration: 1000,
    className: "bg-green-700 text-white border-2 border-green-700",
  });
  setValue("");
  return;
};
export default deleteHead;
