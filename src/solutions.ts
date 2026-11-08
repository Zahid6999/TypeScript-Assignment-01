const multiplyValue = (value: number, multiplier?: number) => {
  if (multiplier === undefined) {
    return value * 2;
  } else {
    return value * multiplier;
  }
};
const result1 = multiplyValue(10);
const result2 = multiplyValue(10, 5);
const result3 = multiplyValue(7, 0);

// console.log(result1, result2, result3);

const processInput = (input: string | number | boolean): string | number => {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return input ? "Active" : "Inactive";
  }
};
// console.log(processInput("  TypeScript  "));
// console.log(processInput(7));
// console.log(processInput(true));
// console.log(processInput(false));

type Coordinate = readonly [
  latitude: number,
  longitude: number,
  locationName: string,
];
function formatCoordinate(coordinate: Coordinate): string {
  //   console.log(coordinate);
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName}(${latitude},${longitude})`;
}
// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));

const concatenateArrays = <T>(...arr: T[][]): T[] => {
  const result = arr.reduce((acc, curr) => acc.concat(curr));
  return result;
};
console.log(concatenateArrays(["a", "b"], ["c", "d"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));
console.log(concatenateArrays([]));
