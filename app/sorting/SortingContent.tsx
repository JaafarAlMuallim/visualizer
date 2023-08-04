"use client";
import { itemsContext, settingsContext } from "@/store/contexts";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function SortingContent() {
  const { items } = useContext(itemsContext);
  const { settings } = useContext(settingsContext);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ delay: 0.175 }}
      >
        <section className="row-span-5 h-96 w-screen">
          <div className="flex w-full h-full items-end justify-center overflow-hidden">
            {items.map((item, idx) => (
              <div
                key={`${item}-${settings.arrLength}-${idx}`}
                className="flex-1 border border-green-900"
                style={{
                  backgroundColor: "#482",
                  height: `${item / 4}%`,
                }}
                id={`${idx}`}
              />
            ))}
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
}
