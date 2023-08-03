"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { twMerge } from "tailwind-merge";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-blue-700 via-purple-800 to-pink-900 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/" className="font-semibold text-xl tracking-tight">
          Visualizer
        </Link>
      </div>
      <div className="hidden sm:block sm:ml-6">
        <div className="flex space-x-4">
          <Link
            href="/sorting"
            className={twMerge(
              `text-gray-400 hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium ${
                pathname === "/sorting" ? "text-white" : ""
              }`
            )}
          >
            Sorting
          </Link>
          <Link
            href="/stacks-queues"
            className={twMerge(
              `text-gray-400 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                pathname === "/stacks-queues" ? "text-white" : ""
              }`
            )}
          >
            Stacks & Queues
          </Link>
          <Link
            href="/linked-lists"
            className={twMerge(
              `text-gray-400 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                pathname === "/linked-lists" ? "text-white" : ""
              }`
            )}
          >
            Linked Lists
          </Link>
          {/* <Link
            href="/trees"
            className={`text-slate-300 hover:bg-slate-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
              selected ? "text-blue-400" : ""
            }`}
          >
            Trees
          </Link> */}
        </div>
      </div>
      <div className="">
        <div className="ml-3 relative md:hidden">
          <Popover>
            <PopoverTrigger
              aria-controls="user-menu"
              className="max-w-xs flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-700 focus:ring-white"
            >
              <span className="sr-only">Open user menu</span>

              <span className="text-white underline p-3">Settings</span>
            </PopoverTrigger>
            <PopoverContent
              className={`origin-top-right flex flex-col absolute 
                  right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-slate-800 ring-1 ring-black ring-opacity-5`}
            >
              <Link
                href="/sorting"
                className=" text-slate-300 hover:bg-slate-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Sorting
              </Link>
              <Link
                href="/stacks-queues"
                className="text-slate-300 hover:bg-slate-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Stacks & Queues
              </Link>
              <Link
                href="/linked-lists"
                className="text-slate-300 hover:bg-slate-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Linked Lists
              </Link>
              <Link
                href="/trees"
                className="text-slate-300 hover:bg-slate-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Trees
              </Link>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </nav>
  );
}
