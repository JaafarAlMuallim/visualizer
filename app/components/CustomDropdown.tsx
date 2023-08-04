import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import StructureNode from "@/models/Node";

export default function CustomDropdown({
  changeState,
  currentState,
  list,
}: {
  changeState(state: string): void;
  currentState: string;
  list: StructureNode[];
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        id="trigger"
        className="bg-blue-500 mx-5 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
      >
        Change Operation
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          disabled={currentState === "Add To Head"}
          onClick={() => changeState("Add To Head")}
        >
          Add To Head
        </DropdownMenuItem>
        <DropdownMenuItem
          disabled={currentState === "Add Before" || list.length === 0}
          onClick={() => changeState("Add Before")}
        >
          Add Before
        </DropdownMenuItem>
        <DropdownMenuItem
          disabled={currentState === "Add After" || list.length === 0}
          onClick={() => changeState("Add After")}
        >
          Add After
        </DropdownMenuItem>
        <DropdownMenuItem
          disabled={currentState === "Add To Tail"}
          onClick={() => changeState("Add To Tail")}
        >
          Add To Tail
        </DropdownMenuItem>
        <DropdownMenuItem
          disabled={currentState === "Delete From Head" || list.length === 0}
          onClick={() => changeState("Delete From Head")}
        >
          Delete From Head
        </DropdownMenuItem>
        <DropdownMenuItem
          disabled={currentState === "Delete From Tail" || list.length === 0}
          onClick={() => changeState("Delete From Tail")}
        >
          Delete From Tail
        </DropdownMenuItem>
        <DropdownMenuItem
          disabled={currentState === "Delete Element" || list.length === 0}
          onClick={() => changeState("Delete Element")}
        >
          Delete Element
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
