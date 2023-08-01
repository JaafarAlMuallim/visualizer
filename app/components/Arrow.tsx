export default function Arrow(props: {
  direction: "right" | "left" | "up" | "down";
  className?: string;
}) {
  const degree = {
    right: 90,
    left: 90,
    up: 0,
    down: 180,
  }[props.direction];
  return (
    <svg
      className={`h-14 w-14 text-white ${`${
        props.direction === "left" ? "-" : ""
      }rotate-${degree}`} ${props.className}`}
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
