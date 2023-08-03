import StructureNode from "@/models/Node";
import { v4 as uuidv4 } from "uuid";
import customToast from "./toasts";
type props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setList: React.Dispatch<React.SetStateAction<StructureNode[]>>;
};
const operators = ["+", "-", "/", "*"];
export default function pushStack({ value, setList, setValue }: props) {
  if (value === "") {
    customToast("Please Enter a Value", "error");
    return;
  }
  if (typeof parseInt(value) === "number" && !isNaN(parseInt(value))) {
    const node: StructureNode = {
      value: parseInt(value),
      id: uuidv4(),
    };
    setList((prevList) => [node, ...prevList]);
    customToast("Value Added To Stack", "success");
    setValue("");
    return;
  }
  if (operators.includes(value)) {
    const node: StructureNode = {
      value: value,
      id: uuidv4(),
    };
    setList((prevList) => [node, ...prevList]);
    customToast("Operator Added To Stack", "success");
    setValue("");
    return;
  } else {
    customToast("Please Enter a Number Or an Operator", "error");
  }
  setValue("");
  return;
}
