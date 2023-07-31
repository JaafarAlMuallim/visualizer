import { Switch } from "@/components/ui/switch";

export default function CustomSwitch({
  setType,
  struct,
  currentType,
}: {
  setType(type: "singly" | "doubly"): void;
  struct: string;
  currentType: string;
}) {
  return (
    <>
      <label
        htmlFor="list-type"
        className="text-slate-300 text-sm hover:bg-slate-700 whitespace-nowrap"
      >
        {struct}
      </label>
      <Switch
        id="list-type"
        className="mx-10"
        onClick={() => {
          setType(currentType === "singly" ? "doubly" : "singly");
        }}
      />
    </>
  );
}
