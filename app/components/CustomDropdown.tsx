import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function CustomDropdown({
  changeState,
  currentState,
}: {
  changeState(state: string): void;
  currentState: string;
}) {
  return (
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
  );
}
