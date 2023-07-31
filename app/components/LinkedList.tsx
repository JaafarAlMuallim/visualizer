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
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-20 text-center">
      <div className="flex flex-row items-center justify-center">
        {type === "singly"
          ? list.map((item, index) => {
              return (
                <>
                  <Box number={item} />
                  {index !== list.length - 1 && <Arrow direction="right" />}
                </>
              );
            })
          : list.map((item, index) => {
              return (
                <>
                  <Box number={item} />
                  <div>
                    {index !== list.length - 1 && <Arrow direction="right" />}
                    {index !== list.length - 1 && <Arrow direction="left" />}
                  </div>
                </>
              );
            })}
        {type === "singly" ? (
          <Arrow direction="right" />
        ) : (
          <div>
            {<Arrow direction="right" />}
            {<Arrow direction="left" />}
          </div>
        )}
        <Box number={"null"} />
      </div>
    </div>
  );
}
