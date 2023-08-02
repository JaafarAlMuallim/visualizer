import { toast } from "@/components/ui/use-toast";

type props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setList: React.Dispatch<React.SetStateAction<(number | string)[]>>;
};
export default function enqueue({ value, setList, setValue }: props) {
  console.log("ENQUEUING");
  if (value === "") {
    toast({
      title: "Error",
      description: "Please Enter a Value",
      duration: 2000,
      className: "bg-red-700 text-white border-2 border-red-700",
    });
  }
  if (typeof parseInt(value) === "number" && !isNaN(parseInt(value))) {
    setList((prevList) => [...prevList, parseInt(value)]);
    toast({
      title: "Success",
      description: "Value Added To Queue",
      duration: 2000,
      className: "bg-green-700 text-white border-2 border-green-700",
    });
  } else {
    toast({
      title: "Error",
      description: "Please Enter a Number",
      duration: 2000,
      className: "bg-red-700 text-white border-2 border-red-700",
    });
  }
  setValue("");
  return;
}
