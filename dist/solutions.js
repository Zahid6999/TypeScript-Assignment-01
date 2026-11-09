"use strict";
const multiplyValue = (value, multiplier) => {
    if (multiplier === undefined) {
        return value * 2;
    }
    else {
        return value * multiplier;
    }
};
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
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}
const concatenateArrays = (...arr) => {
    const result = arr.reduce((acc, curr) => acc.concat(curr));
    return result;
};
const getPopularCourses = (courses, minStudents) => {
    const popularCourses = courses.filter((course) => course.isPublished && course.students >= minStudents);
    return popularCourses;
};
const pluckValues = (items, key) => {
    return items.map((item) => item[key]);
};
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name} `;
    }
}
const validateAgeAsync = async (age) => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
        else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
};
const test = async () => {
    try {
        const result1 = await validateAgeAsync(20);
        console.log(result1);
    }
    catch (error) {
        console.error(error);
    }
    try {
        const result2 = await validateAgeAsync(15);
        console.log(result2);
    }
    catch (error) {
        console.error(error);
    }
};
