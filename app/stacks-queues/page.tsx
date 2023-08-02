"use client";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import StackQueue from "../components/StackQueue";
import { toast } from "@/components/ui/use-toast";
import pushStack from "@/utils/pushStack";
import enqueue from "@/utils/enqQ";
import popStack from "@/utils/popStack";
import dequeue from "@/utils/deqQ";
import customToast from "@/utils/toasts";

// TODO add framer motion
export default function StackAndQueuePage() {
  const [list, setList] = useState<(number | string)[]>([]);
  const [type, setType] = useState<"stack" | "queue">("stack");
  const [value, setValue] = useState("");

  const clearList = () => {
    setList((prevList) => []);
  };

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const changeType = () => {
    setType((prevType) => (prevType === "stack" ? "queue" : "stack"));
    if (list.some((item) => typeof item === "string")) {
      clearList();
      customToast(
        "You can't change the type of a list with strings",
        "warning"
      );
    } else {
      setList((prevList) => [...prevList].reverse());
    }
  };
  const deletionHandler = () => {
    switch (type) {
      case "stack":
        popStack({ list, setList });
        return;
      case "queue":
        dequeue({ list, setList });
        break;
    }
  };
  const insertionHandler = () => {
    switch (type) {
      case "stack":
        pushStack({ value, setList, setValue });
        return;
      case "queue":
        enqueue({ value, setList, setValue });
        break;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="px-4 py-2 flex items-center">
        <div className="flex md:flex-row items-center justify-center mx-20">
          <>
            <input
              type="text"
              className="border-2 border-gray-300 bg-white h-10 px-5 rounded-md text-sm focus:outline-non w-48"
              placeholder="New value"
              onChange={changeValue}
              value={value}
              autoFocus
            />
          </>
          <button
            disabled={value === ""}
            type="button"
            className="bg-blue-500 mx-5 hover:bg-blue-700 text-white py-2 px-4 rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
            onClick={insertionHandler}
          >
            Insert
          </button>
          <button
            disabled={list.length === 0}
            type="button"
            className="bg-blue-500 mx-5 hover:bg-blue-700 text-white py-2 px-4 rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
            onClick={deletionHandler}
          >
            Delete
          </button>
        </div>
        <>
          <label
            htmlFor="list-type"
            className="text-slate-300 text-sm hover:bg-slate-700 whitespace-nowrap"
          >
            {type === "stack" ? "Stack" : "Queue"}
          </label>
          <Switch id="list-type" className="mx-9" onClick={changeType} />
        </>
        <button
          type="button"
          disabled={list.length === 0}
          className="bg-blue-500 mx-5 hover:bg-blue-700 text-white py-2 px-4 rounded-lg  disabled:bg-gray-400 disabled:cursor-not-allowed"
          onClick={clearList}
        >
          Clear {type === "stack" ? "Stack" : "Queue"}
        </button>
      </div>

      <div className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <div className="flex flex-row items-center justify-center">
          <StackQueue type={type} list={list} />
        </div>
      </div>
    </div>
  );
}
