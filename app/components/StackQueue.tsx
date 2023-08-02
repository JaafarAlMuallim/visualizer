import Box from "./Box";

export default function StackQueue({
  type,
  list,
}: {
  type: "stack" | "queue";
  list: (number | string)[];
}) {
  const listContainer =
    type === "stack"
      ? list.map((item, index) => {
          return (
            <div key={index} className="flex items-center justify-center">
              <Box key={item} number={item} />
            </div>
          );
        })
      : list.map((item, index) => {
          return (
            <div key={index} className="flex items-center justify-center">
              <Box number={item} />
            </div>
          );
        });

  return (
    <div
      key={type}
      className="flex flex-col items-center justify-center flex-1 px-20 text-center"
    >
      <ul className="flex flex-row items-center justify-center">
        <div
          className={`flex ${
            type === "stack" ? "flex-col" : "flex-row"
          } items-center justify-center`}
        >
          {listContainer}
        </div>
      </ul>
    </div>
  );
}
