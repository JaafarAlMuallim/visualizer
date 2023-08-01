"use client";
import { useRef, useState } from "react";
import { Toggle } from "@/components/ui/toggle";
import { toast } from "@/components/ui/use-toast";
import { errorStyle, successStyle } from "@/utils/constants";
import InsertionSort from "../components/InsertionSort";
import "../globals.css";
import SortDropdown from "./SortDropdown";

// TODO add framer motion
export default function SortingPage() {
  const [list, setList] = useState<number[]>([]);
  const [type, setType] = useState<string>("insertion");
  const [currentState, setCurrentState] = useState("Add");
  const [value, setValue] = useState("");

  const stateHandler = () => {
    setCurrentState(currentState === "Add" ? "Delete" : "Add");
  };
  const clearList = () => {
    setList((prevList) => []);
  };

  const valueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handler = () => {
    switch (currentState) {
      case "Add":
        if (value === "") {
          toast({
            title: "Error",
            description: "Value cannot be empty",
            duration: 1000,
            className: errorStyle,
          });
          setValue("");
          return;
        }
        if (!isNaN(Number(value))) {
          setList((prevList) =>
            [...prevList, Number(value)].sort((a, b) => a - b)
          );
          toast({
            title: "Success",
            description: "Value added",
            duration: 1000,
            className: successStyle,
          });
          setValue("");
          return;
        }
        toast({
          title: "Error",
          description: "Value must be a number",
          duration: 1000,
          className: errorStyle,
        });
      case "Delete":
        if (list.length === 0) {
          toast({
            title: "Error",
            description: "List is empty, add values then delete",
            duration: 1000,
            className: errorStyle,
          });
          setValue("");
          return;
        }
        if (value === "") {
          toast({
            title: "Error",
            description: "Value cannot be empty",
            duration: 1000,
            className: errorStyle,
          });
          setValue("");
          return;
        }
        if (!list.includes(Number(value))) {
          toast({
            title: "Error",
            description: "Value not found",
            duration: 1000,
            className: errorStyle,
          });
          setValue("");
          return;
        }
        setList((prevList) =>
          prevList
            .filter((item) => item !== Number(value))
            .sort((a, b) => a - b)
        );
        toast({
          title: "Success",
          description: "Value Deleted",
          duration: 1000,
          className: successStyle,
        });
        return;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="px-4 py-2 flex items-center">
        <div className="flex md:flex-row items-center justify-center mx-20">
          <input
            type="number"
            className="border-2 border-gray-300 bg-white h-10 px-5 rounded-md text-sm focus:outline-non w-48"
            placeholder="Enter a value"
            value={value}
            onChange={valueHandler}
          />
          <button
            type="button"
            disabled={value === ""}
            className="bg-blue-500 mx-5 hover:bg-blue-700 text-white py-2 px-4 rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
            onClick={handler}
          >
            {currentState.includes("Delete") ? "Delete" : "Add"}
          </button>
          <Toggle
            disabled={list.length === 0}
            className="bg-blue-700 text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
            onClick={stateHandler}
          >
            {`Toggle ${currentState === "Add" ? "Delete" : "Add"}`}
          </Toggle>
          <SortDropdown currentState={type} changeState={setType} />
        </div>
        <button
          hidden={list.length === 0}
          type="button"
          className="bg-blue-500 mx-5 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
          onClick={clearList}
        >
          Clear List
        </button>
      </div>

      <div className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <div className="flex flex-row items-center justify-center">
          <InsertionSort list={list} />
        </div>
      </div>
    </div>
  );
}
