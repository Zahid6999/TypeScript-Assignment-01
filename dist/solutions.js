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
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}
// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));
const concatenateArrays = (...arr) => {
    const result = arr.reduce((acc, curr) => acc.concat(curr));
    return result;
};
const getPopularCourses = (courses, minStudents) => {
    const popularCourses = courses.filter((course) => course.isPublished && course.students >= minStudents);
    return popularCourses;
};
const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true },
];
// console.log(getPopularCourses(courses, 80));
const pluckValues = (items, key) => {
    return items.map((item) => item[key]);
};
const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" },
];
// console.log(pluckValues(users, "name"));
// console.log(pluckValues(users, "id"));
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
const manager = new Manager("Alice", 50000, "Engineering");
// console.log(manager.getDetails());
// console.log(manager.getRoleInfo());
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
test();
