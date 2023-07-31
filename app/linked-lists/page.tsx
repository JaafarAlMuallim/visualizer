"use client";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import LinkedList from "../components/LinkedList";
import {
  ADD_AFTER,
  ADD_BEFORE,
  ADD_HEAD,
  ADD_TAIL,
  DELETE_ELEMENT,
  DELETE_HEAD,
  DELETE_TAIL,
} from "@/utils/linkedLists-explaination";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// TODO add framer motion
export default function LinkedListPage() {
  const [list, setList] = useState<number[]>([]);
  const [type, setType] = useState<"singly" | "doubly">("singly");
  const { toast } = useToast();
  const [currentState, setCurrentState] = useState("Add To Head");
  const [value, setValue] = useState("");
  const [beforeAfter, setBeforeAfter] = useState("");
  const errorStyle = "bg-red-700 text-white border-2 border-red-700";
  const successStyle = "bg-green-700 text-white border-2 border-green-700";

  const SpecialOps = ["Add Before", "Add After"];
  const deleteions = ["Delete From Head", "Delete From Tail"];
  const explaination = () => {
    switch (currentState) {
      case "Add To Head":
        return ADD_HEAD.split("\n").map((line) => <p key={line}>{line}</p>);
      case "Add Before":
        return ADD_BEFORE.split("\n").map((line) => <p key={line}>{line}</p>);
      case "Add After":
        return ADD_AFTER.split("\n").map((line) => <p key={line}>{line}</p>);
      case "Add To Tail":
        return ADD_TAIL.split("\n").map((line) => <p key={line}>{line}</p>);
      case "Delete From Head":
        return DELETE_HEAD.split("\n").map((line) => <p key={line}>{line}</p>);
      case "Delete From Tail":
        return DELETE_TAIL.split("\n").map((line) => <p key={line}>{line}</p>);
      case "Delete Element":
        return DELETE_ELEMENT.split("\n").map((line) => (
          <p key={line}>{line}</p>
        ));
    }
  };

  const handler = () => {
    switch (currentState) {
      case "Add To Head":
        if (list.includes(Number(value))) {
          toast({
            title: "Error",
            description: "Element already exists",
            duration: 3000,
            className: errorStyle,
          });
          setValue("");
          return;
        }
        addHead();
        break;
      case "Add Before":
        if (!list.includes(Number(beforeAfter))) {
          toast({
            title: "Error",
            description: "Element not found",
            duration: 3000,
            className: errorStyle,
          });
          setValue("");
          setBeforeAfter("");
          return;
        }
        if (list.includes(Number(value))) {
          toast({
            title: "Error",
            description: "Element already exists",
            duration: 3000,
            className: errorStyle,
          });
          setValue("");
          setBeforeAfter("");
          return;
        }
        addBefore();
        break;
      case "Add After":
        if (!list.includes(Number(beforeAfter))) {
          toast({
            title: "Error",
            description: "Element not found",
            duration: 3000,
            className: errorStyle,
          });
          setValue("");
          setBeforeAfter("");
          return;
        }
        if (list.includes(Number(value))) {
          toast({
            title: "Error",
            description: "Element already exists",
            duration: 3000,
            className: errorStyle,
          });
          setValue("");
          setBeforeAfter("");
          return;
        }
        addAfter();
        break;
      case "Add To Tail":
        if (list.includes(Number(value))) {
          toast({
            title: "Error",
            description: "Element already exists",
            duration: 3000,
            className: errorStyle,
          });
          setValue("");
          return;
        }
        addTail();
        break;
      case "Delete From Head":
        deleteHead();
        break;
      case "Delete From Tail":
        deleteTail();
        break;
      case "Delete Element":
        deleteElement();
        break;
    }
  };
  const addHead = () => {
    if (value === "") {
      toast({
        title: "Error",
        description: "Please enter a value",
        duration: 3000,
        className: errorStyle,
      });
      return;
    }
    setList([Number(value), ...list]);
    toast({
      title: "Success",
      description: "Added to head",
      duration: 3000,
      className: successStyle,
    });
    setValue("");
    return;
  };
  const addBefore = () => {
    if (value === "") {
      toast({
        title: "Error",
        description: "Please enter a value",
        duration: 3000,
        className: errorStyle,
      });
      setValue("");
      setBeforeAfter("");
      return;
    }
    if (list.length === 0) {
      toast({
        title: "Error",
        description: "List is empty",
        duration: 3000,
        className: errorStyle,
      });
      setValue("");
      setBeforeAfter("");
      return;
    }
    const index = list.indexOf(Number(beforeAfter));
    if (index === -1) {
      toast({
        title: "Error",
        description: "Element not found",
        duration: 3000,
        className: errorStyle,
      });
      setValue("");
      setBeforeAfter("");
      return;
    }
    setList([...list.slice(0, index), Number(value), ...list.slice(index)]);
    toast({
      title: "Success",
      description: "Added before",
      duration: 3000,
      className: successStyle,
    });
    setValue("");
    setBeforeAfter("");
    return;
  };
  const addAfter = () => {
    if (value === "") {
      toast({
        title: "Error",
        description: "Please enter a value",
        duration: 3000,
        className: errorStyle,
      });
      setValue("");
      setBeforeAfter("");
      return;
    }
    if (list.length === 0) {
      toast({
        title: "Error",
        description: "List is empty",
        duration: 3000,
        className: errorStyle,
      });
      setValue("");
      setBeforeAfter("");
      return;
    }
    const index = list.indexOf(Number(beforeAfter));
    if (index === -1) {
      toast({
        title: "Error",
        description: "Element not found",
        duration: 3000,
        className: errorStyle,
      });
      setValue("");
      setBeforeAfter("");
      return;
    }
    setList((prevList) => [
      ...prevList.slice(0, index + 1),
      Number(value),
      ...prevList.slice(index + 1),
    ]);
    toast({
      title: "Success",
      description: "Added after",
      duration: 3000,
      className: successStyle,
    });
    setValue("");
    setBeforeAfter("");
    return;
  };

  const addTail = () => {
    if (value === "") {
      toast({
        title: "Error",
        description: "Please enter a value",
        duration: 3000,
        className: errorStyle,
      });
      setValue("");
      return;
    }
    setList((prevList) => [...prevList, Number(value)]);
    toast({
      title: "Success",
      description: "Added to tail",
      duration: 3000,
      className: successStyle,
    });
    setValue("");
    return;
  };
  const deleteHead = () => {
    if (list.length === 0) {
      toast({
        title: "Error",
        description: "List is empty",
        duration: 3000,
        className: errorStyle,
      });
      setValue("");
      return;
    }
    setList((prevList) => prevList.slice(1));
    toast({
      title: "Success",
      description: "Deleted from head",
      duration: 3000,
      className: successStyle,
    });
    setValue("");
    return;
  };
  const deleteTail = () => {
    if (list.length === 0) {
      toast({
        title: "Error",
        description: "List is empty",
        duration: 3000,
        className: errorStyle,
      });
      setValue("");
      return;
    }
    setList((prevList) => prevList.slice(0, prevList.length - 1));
    toast({
      title: "Success",
      description: "Deleted from tail",
      duration: 3000,
      className: successStyle,
    });
    setValue("");
    return;
  };
  const deleteElement = () => {
    if (value === "") {
      toast({
        title: "Error",
        description: "Please enter a value",
        duration: 3000,
        className: errorStyle,
      });
      setValue("");
      return;
    }
    if (list.length === 0) {
      toast({
        title: "Error",
        description: "List is empty",
        duration: 3000,
        className: errorStyle,
      });
      setValue("");
      return;
    }
    const index = list.indexOf(Number(value));
    if (index === -1) {
      toast({
        title: "Error",
        description: "Element not found",
        duration: 3000,
        className: errorStyle,
      });
      setValue("");
      return;
    }
    setList((prevList) => [
      ...prevList.slice(0, index),
      ...prevList.slice(index + 1),
    ]);
    toast({
      title: "Success",
      description: "Deleted element",
      duration: 3000,
      className: successStyle,
    });
    setValue("");
    setBeforeAfter("");
    return;
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
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
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
            className="bg-blue-500 mx-5 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
            onClick={handler}
          >
            {currentState.includes("Delete") ? "Delete" : "Add"}
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger className="bg-blue-500 mx-5 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
              {currentState} | Change Operation
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => changeState("Add To Head")}>
                Add To Head
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeState("Add Before")}>
                Add Before
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeState("Add After")}>
                Add After
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeState("Add To Tail")}>
                Add To Tail
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeState("Delete From Head")}>
                Delete From Head
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeState("Delete From Tail")}>
                Delete From Tail
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeState("Delete Element")}>
                Delete Element
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Popover>
            <PopoverTrigger className="bg-blue-700 mx-5 hover:bg-blue-900 text-white py-2 px-4 rounded-lg">
              Explaination
            </PopoverTrigger>
            <PopoverContent>
              <p>{explaination()}</p>
            </PopoverContent>
          </Popover>
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
