"use client";
import { Algo } from "@/models/contextTypes";
import { itemsContext, settingsContext } from "@/store/contexts";
import { ChangeEvent, useContext, useState } from "react";
import SortDropdown from "./SortDropdown";
import customToast from "@/utils/toasts";

export default function SortingSettings() {
  const { sort, settings, setSettings } = useContext(settingsContext);
  const { setItems } = useContext(itemsContext);

  const onArrayChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!setSettings) return;
    setSettings((c) => ({ ...c, arrLength: +e.target.value * 5 }));
    return;
  };

  const onAlgoChange = (type: Algo) => {
    if (!setSettings) return;
    setSettings((prevSettings) => ({ ...prevSettings, type: type }));
    customToast(`Changed to ${type} sort`, `update`);
    resetArray();
    return;
  };

  const sortingHandler = () => {
    window.scrollTo(0, document.body.scrollHeight);
    sort(settings.type);
  };

  const resetArray = () => {
    const randNums: number[] = [];
    for (let i = 0; i < settings.arrLength; i++) {
      randNums.push(Math.floor(Math.random() * 400));
    }
    setItems!(randNums);
    return;
  };

  return (
    <nav className="w-screen  text-white my-10">
      <div className="flex flex-col justify-start items-center w-full row-span-1">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
          {settings.type.charAt(0).toUpperCase() + settings.type.slice(1)}
        </h1>
        <div className="flex justify-center items-center my-5">
          <SortDropdown
            currentState={settings.type}
            changeState={onAlgoChange}
          />
          <button
            type="button"
            className="bg-blue-500 mx-5 hover:bg-blue-700 text-white py-2 px-4 rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed "
            onClick={sortingHandler}
          >
            Start Sorting
          </button>
          <button
            type="button"
            className="bg-blue-500 mx-5 hover:bg-blue-700 text-white py-2 px-4 rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
            onClick={resetArray}
          >
            Reset Array
          </button>
        </div>
        <label className="my-2" htmlFor="items_amount">
          Array Length: {settings.arrLength}
        </label>
        <input
          type="range"
          name="items_amount"
          id="items_amount"
          className="w-full max-w-2xl my-2"
          defaultValue={settings.arrLength}
          min={1}
          max={100}
          onChange={onArrayChange}
        />
      </div>
    </nav>
  );
}
