import { toast } from "@/components/ui/use-toast";

type props = {
  list: (number | string)[];
  setList: React.Dispatch<React.SetStateAction<(number | string)[]>>;
};

export default function popStack({ list, setList }: props) {
  if (list.length === 0) {
    toast({
      title: "Error",
      description: "Stack is empty",
      duration: 2000,
      className: "bg-red-700 text-white border-2 border-red-700",
    });
  } else {
    setList((prevList) => prevList.slice(1));
    toast({
      title: "Success",
      description: "Value removed from stack",
      duration: 2000,
      className: "bg-green-700 text-white border-2 border-green-700",
    });
  }
  return;
}
