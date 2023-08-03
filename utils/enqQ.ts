import StructureNode from "@/models/Node";
import { v4 as uuidv4 } from "uuid";
import customToast from "./toasts";
type props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setList: React.Dispatch<React.SetStateAction<StructureNode[]>>;
};
export default function enqueue({ value, setList, setValue }: props) {
  if (value === "") {
    customToast("Please Enter a Value", "error");
  }
  if (typeof parseInt(value) === "number" && !isNaN(parseInt(value))) {
    const node: StructureNode = {
      value: parseInt(value),
      id: uuidv4(),
    };
    setList((prevList) => [...prevList, node]);
    customToast("Value Added To Queue", "success");
  } else {
    customToast("Please Enter a Number", "error");
  }
  setValue("");
  return;
}
