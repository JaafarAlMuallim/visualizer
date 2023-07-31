"use client";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import LinkedList from "../components/LinkedList";
// TODO add framer motion
export default function LinkedListPage() {
  const [list, setList] = useState<number[]>([]);
  const [type, setType] = useState<"singly" | "doubly">("singly");
  const { toast } = useToast();
  const [value, setValue] = useState("");
  const errorStyle = "bg-red-700 text-white border-2 border-red-700";
  const successStyle = "bg-green-700 text-white border-2 border-green-700";
  const addHandler = () => {
    if (value === "" || isNaN(parseInt(value))) {
      toast({
        title: "Error",
        description: "No Value Entered or Value is not a number",
        className: errorStyle,
      });
      return;
    }
    if (list.includes(parseInt(value))) {
      toast({
        title: "Error",
        description: "Value already exists in list",
        className: errorStyle,
      });
      setValue("");
      return;
    }
    setList((prevList) => [...prevList, parseInt(value)]);
    toast({
      title: "Success",
      description: "Value added to list",
      className: successStyle,
    });
    setValue("");
  };
  const removeHandler = () => {
    if (value === "" || isNaN(parseInt(value))) {
      toast({
        title: "Error",
        description: "No Value Entered or Value is not a number",
        className: errorStyle,
      });
      return;
    }
    if (!list.includes(parseInt(value))) {
      toast({
        title: "Error",
        description: "Value not found in list",
        className: errorStyle,
      });
      setValue("");
      return;
    }
    setList((prevList) => prevList.filter((item) => item !== parseInt(value)));
    toast({
      title: "Success",
      description: "Value removed from list",
      className: successStyle,
    });
    setValue("");
  };
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="px-4 py-2 flex items-center">
        <div className="flex flex-row items-center justify-center mx-20">
          <input
            type="number"
            id="value"
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            placeholder="Enter a value"
            onChange={changeHandler}
            value={value}
          />

          <button
            type="button"
            className="bg-blue-500 mx-5 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
            onClick={addHandler}
          >
            Add
          </button>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
            onClick={removeHandler}
          >
            Delete
          </button>
        </div>
        <label
          htmlFor="list-type"
          className="text-slate-300 text-sm hover:bg-slate-700 whitespace-nowrap"
        >
          Doubly Linked List
        </label>
        <Switch
          id="list-type"
          className="mx-10"
          onClick={() => {
            setType(type === "singly" ? "doubly" : "singly");
          }}
        />
      </div>

      <div className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <div className="flex flex-row items-center justify-center">
          <LinkedList type={type} list={list} />
        </div>
      </div>
    </div>
  );
}
