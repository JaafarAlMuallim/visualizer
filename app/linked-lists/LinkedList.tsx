import StructureNode from "@/models/Node";
import Arrow from "../components/Arrow";
import Box from "../components/Box";
import { AnimatePresence, motion } from "framer-motion";

export default function LinkedList({
  type,
  list,
}: {
  type: "singly" | "doubly";
  list: StructureNode[];
}) {
  const listContainer = (
    <AnimatePresence>
      {type === "singly"
        ? list.map((item, index) => {
            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.175 }}
              >
                <div className="flex items-center justify-center">
                  <Box number={item.value} />
                  {index !== list.length - 1 && <Arrow direction="right" />}
                </div>
              </motion.li>
            );
          })
        : list.map((item, index) => {
            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.175 }}
              >
                <div className="flex items-center justify-center">
                  <Box number={item.value} />
                  <div>
                    {index !== list.length - 1 && <Arrow direction="right" />}
                    {index !== list.length - 1 && <Arrow direction="left" />}
                  </div>
                </div>
              </motion.li>
            );
          })}
      {list.length !== 0 ? (
        type === "singly" ? (
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.175 }}
          >
            <div className="flex items-center justify-center">
              <Arrow key={"null val"} direction="right" />
              <Box key={"null"} number={"null"} />
            </div>
          </motion.li>
        ) : (
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.175 }}
          >
            <div className="flex items-center justify-center">
              (
              <div key={type}>
                {<Arrow key={"nullR"} direction="right" />}
                {<Arrow key={"nullL"} direction="left" />}
              </div>
              )
              <Box key={"null"} number={"null"} />
            </div>
          </motion.li>
        )
      ) : null}
    </AnimatePresence>
  );

  return (
    <div
      key={type}
      className="flex flex-col items-center justify-center flex-1 px-20 text-center overflow-hidden"
    >
      <ul className="flex flex-row items-center justify-center">
        <div className="flex flex-row items-center justify-center">
          {listContainer}
        </div>
      </ul>
    </div>
  );
}
