import { toast } from "@/components/ui/use-toast";

const customToast = (message: string, type: string) => {
  let className = "";
  if (type === "error") {
    className = "bg-red-700 text-white border-2 border-red-700";
  } else if (type === "warning") {
    className = "bg-orange-700 text-white border-2 border-orange-700";
  } else if (type === "update") {
    className = "bg-blue-900 text-white border-2 border-blue-900";
  } else {
    className = "bg-green-700 text-white border-2 border-green-700";
  }
  const title = type.charAt(0).toUpperCase() + type.slice(1);
  toast({
    title: title,
    description: message,
    duration: 2000,
    className: className,
  });
};

export default customToast;
