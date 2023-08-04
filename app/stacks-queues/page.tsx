"use client";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import pushStack from "@/utils/pushStack";
import enqueue from "@/utils/enqQ";
import popStack from "@/utils/popStack";
import dequeue from "@/utils/deqQ";
import customToast from "@/utils/toasts";
import StackQueue from "./StackQueue";
import StructureNode from "@/models/Node";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { evaluatePostfix, isValidPostfixStack } from "@/utils/postfixUtils";
import { motion, AnimatePresence } from "framer-motion";
export default function StackAndQueuePage() {
  const [list, setList] = useState<StructureNode[]>([]);
  const [type, setType] = useState<"stack" | "queue">("stack");
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);

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
  const showValue = () => {
    setShow((prevShow) => !prevShow);
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
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.175 }}
        >
          <div className="px-4 py-2 flex items-center">
            <div className="flex md:flex-row items-center justify-center mx-20 my-5">
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
              <div>
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
                <button
                  disabled={true}
                  type="button"
                  className={`bg-blue-600 mx-5 hover:bg-blue-700 text-white py-2 px-4 rounded-lg ${
                    show ? "" : "invisible"
                  }`}
                >
                  {isValidPostfixStack(list)
                    ? `Postfix = ${evaluatePostfix(list)}`
                    : "Invalid Postfix"}
                </button>
              </div>
            </div>
            <button
              type="button"
              disabled={list.length === 0}
              className="bg-blue-500 mx-5 hover:bg-blue-700 text-white py-2 px-4 rounded-lg  disabled:bg-gray-400 disabled:cursor-not-allowed"
              onClick={clearList}
            >
              Clear {type === "stack" ? "Stack" : "Queue"}
            </button>
            <Popover>
              <PopoverTrigger
                aria-controls="trigger"
                className="bg-blue-700 mx-5 hover:bg-blue-900 text-white py-2 px-4 rounded-lg"
              >
                Settings
              </PopoverTrigger>
              <PopoverContent className="bg-slate-800">
                <label
                  htmlFor="list-type"
                  className="text-slate-300 text-sm hover:bg-slate-700 whitespace-nowrap"
                >
                  Stack
                </label>
                <Switch
                  id="list-type"
                  className="my-2 mx-20"
                  onClick={changeType}
                  checked={type === "stack"}
                />
                {type === "stack" && (
                  <>
                    <label
                      htmlFor="list-type"
                      className="text-slate-300 text-sm hover:bg-slate-700 whitespace-nowrap"
                    >
                      Show Postfix
                    </label>
                    <Switch
                      id="list-type"
                      className="mx-8"
                      onClick={showValue}
                      checked={show}
                    />
                  </>
                )}
              </PopoverContent>
            </Popover>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <div className="flex flex-row items-center justify-center">
          <StackQueue type={type} list={list} />
        </div>
      </div>
    </div>
  );
}
