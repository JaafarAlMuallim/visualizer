import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ADD_AFTER,
  ADD_BEFORE,
  ADD_HEAD,
  ADD_TAIL,
  DELETE_ELEMENT,
  DELETE_HEAD,
  DELETE_TAIL,
} from "@/utils/linkedLists-explaination";

export default function CustomPopover({ state }: { state: string }) {
  const explaination = () => {
    switch (state) {
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

  return (
    <Popover>
      <PopoverTrigger className="bg-blue-700 mx-5 hover:bg-blue-900 text-white py-2 px-4 rounded-lg">
        Explaination
      </PopoverTrigger>
      <PopoverContent>
        <p>{explaination()}</p>
      </PopoverContent>
    </Popover>
  );
}
