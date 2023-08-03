import { AnimatePresence, motion } from "framer-motion";
import Box from "../components/Box";
import StructureNode from "@/models/Node";

export default function StackQueue({
  type,
  list,
}: {
  type: "stack" | "queue";
  list: StructureNode[];
}) {
  const listContainer = (
    <AnimatePresence>
      {list.map((item, index) => {
        return (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ delay: 0.3 }}
          >
            <div key={index} className="flex items-center justify-center">
              <Box key={item.id} number={item.value} />
            </div>
          </motion.li>
        );
      })}
    </AnimatePresence>
  );

  return (
    <div
      key={type}
      className="flex flex-col items-center justify-center flex-1 px-20 text-center"
    >
      <ul className="flex flex-row items-center justify-center">
        <div
          className={`flex ${
            type === "stack" ? "flex-col" : "flex-row"
          } items-center justify-center`}
        >
          {listContainer}
        </div>
      </ul>
    </div>
  );
}
