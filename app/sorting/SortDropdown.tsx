import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Algo } from "@/models/contextTypes";
import { Dispatch, SetStateAction } from "react";

export default function SortDropdown({
  currentState,
  changeState,
}: {
  currentState: string;
  changeState(type: Algo): void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        id="trigger"
        className="bg-blue-500 mx-5 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
      >
        {currentState} | Change Operation
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          disabled={currentState === "insertion"}
          onClick={() => changeState("insertion")}
        >
          Insertion Sort
        </DropdownMenuItem>
        <DropdownMenuItem
          disabled={currentState === "bubble"}
          onClick={() => changeState("bubble")}
        >
          Bubble Sort
        </DropdownMenuItem>
        <DropdownMenuItem
          disabled={currentState === "quick"}
          onClick={() => changeState("quick")}
        >
          Quick Sort
        </DropdownMenuItem>
        <DropdownMenuItem
          disabled={currentState === "merge"}
          onClick={() => changeState("merge")}
        >
          Merge Sort
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
