export default function Box(props: { number: number | "null" }) {
  return (
    <div className="border">
      <h1 className="text-6xl font-bold p-5 text-white">
        {props.number !== "null" ? props.number : "/"}
      </h1>
    </div>
  );
}
