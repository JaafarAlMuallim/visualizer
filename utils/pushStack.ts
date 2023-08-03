import { toast } from "@/components/ui/use-toast";
import StructureNode from "@/models/Node";
import { v4 as uuidv4 } from "uuid";
type props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setList: React.Dispatch<React.SetStateAction<StructureNode[]>>;
};
const operators = ["+", "-", "/", "*"];
export default function pushStack({ value, setList, setValue }: props) {
  if (value === "") {
    toast({
      title: "Error",
      description: "Please Enter a Value",
      duration: 2000,
      className: "bg-red-700 text-white border-2 border-red-700",
    });
    return;
  }
  if (typeof parseInt(value) === "number" && !isNaN(parseInt(value))) {
    const node: StructureNode = {
      value: parseInt(value),
      id: uuidv4(),
    };
    setList((prevList) => [node, ...prevList]);
    toast({
      title: "Success",
      description: "Value Added to Stack",
      duration: 2000,
      className: "bg-green-700 text-white border-2 border-green-700",
    });
    setValue("");
    return;
  }
  if (operators.includes(value)) {
    const node: StructureNode = {
      value: value,
      id: uuidv4(),
    };
    setList((prevList) => [node, ...prevList]);
    toast({
      title: "Success",
      description: "Value Added to Stack",
      duration: 2000,
      className: "bg-green-700 text-white border-2 border-green-700",
    });
    setValue("");
    return;
  } else {
    toast({
      title: "Error",
      description: "Please Enter a Number Or an Operator",
      duration: 2000,
      className: "bg-red-700 text-white border-2 border-red-700",
    });
  }
  setValue("");
  return;
}
