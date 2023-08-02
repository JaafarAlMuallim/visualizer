import { toast } from "@/components/ui/use-toast";

type props = {
  list: (number | string)[];
  setList: React.Dispatch<React.SetStateAction<(number | string)[]>>;
};

export default function dequeue({ list, setList }: props) {
  if (list.length === 0) {
    toast({
      title: "Error",
      description: "Queue is Empty",
      duration: 2000,
      className: "bg-red-700 text-white border-2 border-red-700",
    });
  } else {
    setList((prevList) => prevList.slice(1));
    toast({
      title: "Success",
      description: "Value Removed From Queue",
      duration: 2000,
      className: "bg-green-700 text-white border-2 border-green-700",
    });
  }
  return;
}