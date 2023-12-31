"use client";
import { useState } from "react";
import LinkedList from "./LinkedList";
import CustomDropdown from "../components/CustomDropdown";
import CustomPopover from "../components/CustomPopover";
import CustomSwitch from "../components/CustomSwitch";
import addAfter from "@/utils/addAfter";
import addHead from "@/utils/addHead";
import addBefore from "@/utils/addBefore";
import addTail from "@/utils/addTail";
import deleteHead from "@/utils/deleteHead";
import deleteTail from "@/utils/deleteTail";
import deleteElement from "@/utils/deleteElement";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import StructureNode from "@/models/Node";

import { motion, AnimatePresence } from "framer-motion";
export default function LinkedListPage() {
  const [list, setList] = useState<StructureNode[]>([]);
  const [type, setType] = useState<"singly" | "doubly">("singly");
  const [currentState, setCurrentState] = useState("Add To Head");
  const [value, setValue] = useState("");
  const [beforeAfter, setBeforeAfter] = useState("");

  const SpecialOps = ["Add Before", "Add After"];
  const deleteions = ["Delete From Head", "Delete From Tail"];

  const clearList = () => {
    setList((prevList) => []);
  };
  const handler = () => {
    switch (currentState) {
      case "Add To Head":
        addHead({
          value,
          list,
          setList,
          setValue,
          beforeAfter,
          setBeforeAfter,
        });
        break;
      case "Add Before":
        addBefore({
          value,
          list,
          setList,
          setValue,
          beforeAfter,
          setBeforeAfter,
        });
        break;
      case "Add After":
        addAfter({
          value,
          beforeAfter,
          setValue,
          setBeforeAfter,
          list,
          setList,
        });
        break;
      case "Add To Tail":
        addTail({
          value,
          beforeAfter,
          setValue,
          setBeforeAfter,
          list,
          setList,
        });
        break;
      case "Delete From Head":
        deleteHead({
          value,
          beforeAfter,
          setValue,
          setBeforeAfter,
          list,
          setList,
        });
        break;
      case "Delete From Tail":
        deleteTail({
          value,
          beforeAfter,
          setValue,
          setBeforeAfter,
          list,
          setList,
        });
        break;
      case "Delete Element":
        deleteElement({
          value,
          beforeAfter,
          setValue,
          setBeforeAfter,
          list,
          setList,
        });
        break;
    }
  };

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const changeBeforeAfter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBeforeAfter(e.target.value);
  };

  const changeState = (state: string) => {
    setCurrentState(state);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 overflow-hidden">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ delay: 0.175 }}
        >
          <h1 className="my-7 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5lx lg:text-6xl text-center">
            {currentState}
          </h1>
          <div className="px-4 py-2 flex items-center">
            <div className="flex md:flex-row items-center justify-center mx-20">
              {!deleteions.includes(currentState) ? (
                <>
                  <input
                    type="number"
                    className="border-2 border-gray-300 bg-white h-10 px-5 rounded-md text-sm focus:outline-non w-48"
                    placeholder="New value"
                    onChange={changeValue}
                    value={value}
                    autoFocus
                  />
                  {SpecialOps.includes(currentState) && (
                    <input
                      type="number"
                      className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none mx-3 w-48"
                      placeholder={`${
                        currentState === "Add Before" ? "Before" : "After"
                      } value`}
                      onChange={changeBeforeAfter}
                      value={beforeAfter}
                    />
                  )}
                </>
              ) : null}
              <button
                type="button"
                className="bg-blue-500 mx-5 hover:bg-blue-700 text-white py-2 px-4 rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
                onClick={handler}
                disabled={value === ""}
              >
                {currentState.includes("Delete") ? "Delete" : "Add"}
              </button>
              <CustomDropdown
                changeState={changeState}
                currentState={currentState}
                list={list}
              />
              <CustomPopover state={currentState} />
            </div>
            <Popover>
              <PopoverTrigger
                aria-controls="trigger"
                className="bg-blue-700 mx-5 hover:bg-blue-900 text-white py-2 px-4 rounded-lg"
              >
                Settings
              </PopoverTrigger>
              <PopoverContent className="bg-slate-800">
                <CustomSwitch
                  setType={setType}
                  struct={"Doubly Linked List"}
                  currentType={type}
                />
                <>
                  <label
                    htmlFor="list-type"
                    className="text-slate-300 text-sm hover:bg-slate-700 whitespace-nowrap"
                  >
                    Reverse Linked List
                  </label>
                  <Switch
                    disabled={list.length === 0}
                    id="list-type"
                    className="mx-9"
                    onClick={() => {
                      setList((prevList) => [...[...prevList].reverse()]);
                    }}
                  />
                </>
              </PopoverContent>
            </Popover>
            <button
              type="button"
              hidden={list.length === 0}
              className="bg-blue-500 mx-5 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
              onClick={clearList}
            >
              Clear List
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <div className="flex flex-row items-center justify-center">
          <LinkedList type={type} list={list} />
        </div>
      </div>
    </div>
  );
}
