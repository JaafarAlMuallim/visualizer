import { toast } from "@/components/ui/use-toast";

const customToast = (message: string, type: string) => {
  const color =
    type === "error" ? "red" : type === "warning" ? "orange" : "green";
  const title = type.charAt(0).toUpperCase() + type.slice(1);
  toast({
    title: title,
    description: message,
    duration: 2000,
    className: `bg-${color}-700 text-white border-2 border-${color}-700`,
  });
};

export default customToast;
