"use client";
import { motion } from "framer-motion";
import Arrow from "./Arrow";
export default function HomePageContent() {
  return (
    <div className="my-20">
      <motion.div
        className="flex flex-col items-center justify-center h-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.15 }}
      >
        <h1 className="text-6xl font-bold text-white">Visualizer</h1>
        <h2 className="mx-4 text-2xl font-bold text-white mt-5">
          Visualize Data Structures and Sorting Algorithms and Operations
        </h2>
      </motion.div>
      <div className="my-3 flex flex-col md:flex-row justify-center items-center md:my-10 mx-5">
        <motion.div
          className="whitespace-wrap rounded-lg"
          initial={{ opacity: 0, y: 400 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 400 }}
          transition={{ delay: 0.15 }}
        >
          <p className="text-sm my-4 md:text-2xl font-bold text-white font-sans indent-10 md:mx-10 md:order-1 md:leading-loose">
            Welcome to the interactive visualization platform! Dive into the
            fascinating world of data structures and sorting algorithms with
            just a click. This website allows you to visualize operations on
            linked lists, stacks, queues and sorting algorithms gaining a deeper
            understanding of how they work and how they interact with your data.
            <a
              className="text-white ml-2 text-md font-normal block indent-0"
              href="/sorting"
            >
              <span className="underline">Start With Sorting</span>
              <Arrow
                direction={"right"}
                className="w-7 h-7 inline mx-2 mb-2 no-underline"
              />
            </a>
            {/* <Arrow direction={"right"} className="w-7 h-7 inline mx-2 mb-2" /> */}
          </p>
        </motion.div>
        <motion.img
          className="flex flex-row justify-center mx-5 order-2 "
          src="/images/data.jpeg"
          initial={{ opacity: 0, y: 400 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 400 }}
          transition={{ delay: 0.15 }}
        />
      </div>
    </div>
  );
}
