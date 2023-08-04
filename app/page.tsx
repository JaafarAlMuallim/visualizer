import { motion } from "framer-motion";
import HomePageContent from "./components/HomePage";
export default function Home() {
  return (
    <div className=" bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 h-screen w-screen overflow-hidden">
      <HomePageContent />
    </div>
  );
}
