import { toast } from "@/components/ui/use-toast";

type props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setList: React.Dispatch<React.SetStateAction<(number | string)[]>>;
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
  }
  if (typeof parseInt(value) === "number" && !isNaN(parseInt(value))) {
    setList((prevList) => [parseInt(value), ...prevList]);
    toast({
      title: "Success",
      description: "Value Added to Stack",
      duration: 2000,
      className: "bg-green-700 text-white border-2 border-green-700",
    });
  } else if (operators.includes(value)) {
    setList((prevList) => [value, ...prevList]);
    toast({
      title: "Success",
      description: "Operator Added to Stack",
      duration: 2000,
      className: "bg-green-700 text-white border-2 border-green-700",
    });
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
