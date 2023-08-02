"use client";
import { itemsContext, settingsContext } from "@/store/contexts";
import { useContext } from "react";
export default function SortingContent() {
  const { items } = useContext(itemsContext);
  const { settings } = useContext(settingsContext);
  return (
    <section className="row-span-5 h-screen w-screen">
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
  );
}
