import SortingContent from "./SortingContent";
import SortingSettings from "./SortingSettings";

// TODO add framer motion
export default function SortingPage() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <SortingSettings />
      <SortingContent />
    </div>
  );
}
