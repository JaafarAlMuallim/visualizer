import Arrow from "./Arrow";
import Box from "./Box";
// TODO add framer motion

export default function LinkedList({
  type,
  list,
}: {
  type: "singly" | "doubly";
  list: number[];
}) {
  const listContainer =
    type === "singly"
      ? list.map((item, index) => {
          return (
            <div key={item} className="flex items-center justify-center">
              <Box key={item} number={item} />
              {index !== list.length - 1 && (
                <Arrow key={item + 0.5} direction="right" />
              )}
            </div>
          );
        })
      : list.map((item, index) => {
          return (
            <div key={item} className="flex items-center justify-center">
              <Box number={item} />
              <div>
                {index !== list.length - 1 && <Arrow direction="right" />}
                {index !== list.length - 1 && <Arrow direction="left" />}
              </div>
            </div>
          );
        });

  return (
    <div
      key={type}
      className="flex flex-col items-center justify-center flex-1 px-20 text-center"
    >
      <ul className="flex flex-row items-center justify-center">
        <div className="flex flex-row items-center justify-center">
          {listContainer}
          {list.length !== 0 ? (
            type === "singly" ? (
              <div className="flex items-center justify-center">
                <Arrow key={"null val"} direction="right" />
                <Box key={"null"} number={"null"} />
              </div>
            ) : (
              <div className="flex items-center justify-center">
                (
                <div key={type}>
                  {<Arrow key={"nullR"} direction="right" />}
                  {<Arrow key={"nullL"} direction="left" />}
                </div>
                )
                <Box key={"null"} number={"null"} />
              </div>
            )
          ) : null}
        </div>
      </ul>
    </div>
  );
}
