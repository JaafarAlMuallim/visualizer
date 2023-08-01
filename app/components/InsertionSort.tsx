import Box from "./Box";

export default function InsertionSort({ list }: { list: number[] }) {
  // const animations: any[] = [];
  // const n = list.length;
  // for (let i = 1; i < n; i++) {
  //     const key = list[i];
  //     let j = i - 1;
  //     while (j >= 0 && list[j] > key) {
  //         animations.push([j, j + 1]);
  //         animations.push([j, j + 1]);
  //         animations.push([j + 1, list[j]]);
  //         list[j + 1] = list[j];
  //         j = j - 1;
  //     }
  //     animations.push([j + 1, j + 1]);
  //     animations.push([j + 1, j + 1]);
  //     animations.push([j + 1, key]);
  //     list[j + 1] = key;
  // }
  // return animations;
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-20 text-center">
      <ul className="flex flex-row items-center justify-center">
        <div className="flex flex-row items-center justify-center">
          {list.map((item, index) => {
            return (
              <div key={item} className="flex items-center justify-center">
                <Box key={item} number={item} />
              </div>
            );
          })}
        </div>
      </ul>
    </div>
  );
}
