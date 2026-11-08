"use strict";
const multiplyValue = (value, multiplier) => {
    if (multiplier === undefined) {
        return value * 2;
    }
    else {
        return value * multiplier;
    }
};
const result1 = multiplyValue(10);
const result2 = multiplyValue(10, 5);
const result3 = multiplyValue(7, 0);
// console.log(result1, result2, result3);
const processInput = (input) => {
    if (typeof input === "string") {
        return input.trim().toLowerCase();
    }
    else if (typeof input === "number") {
        return input * 10;
    }
    else {
        return input ? "Active" : "Inactive";
    }
};
function formatCoordinate(coordinate) {
    //   console.log(coordinate);
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName}(${latitude},${longitude})`;
}
// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));
const concatenateArrays = (...arr) => {
    const result = arr.reduce((acc, curr) => acc.concat(curr));
    return result;
};
console.log(concatenateArrays(["a", "b"], ["c", "d"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));
console.log(concatenateArrays([]));
