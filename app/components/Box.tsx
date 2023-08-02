export default function Box(props: { number: number | string | "null" }) {
  return (
    <div className="border h-24 w-24 flex items-center justify-center">
      <h1 className="text-6xl font-bold p-5 text-white">
        {props.number !== "null" ? props.number : "/"}
      </h1>
    </div>
  );
}
