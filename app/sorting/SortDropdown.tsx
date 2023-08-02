import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Algo } from "@/models/contextTypes";
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
        className="block bg-blue-500 mx-5 hover:bg-blue-700 text-white py-2 px-4 rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Change Algorithm
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
