export default function Arrow(props: {
  direction: "right" | "left";
  className?: string;
}) {
  return (
    <svg
      className={`h-14 w-14 text-white ${
        props.direction === "right" ? "rotate-90" : "-rotate-90"
      } ${props.className}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        d="M5 10l7-7m0 0l7 7m-7-7v18"
      ></path>
    </svg>
  );
}

//   return (
//     <div className="flex flex-col items-center justify-center flex-1 px-20 text-center">
//       <svg
//         className={`w-6 h-6 ${
//           props.direction === "right" ? "rotate-90" : "-rotate-90"
//         } `}
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         color="white"
//       >
//         <path
//           stroke="currentColor"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d="M5 10l7-7m0 0l7 7m-7-7v18"
//         ></path>
//       </svg>
//     </div>
//   );
