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
  return `Location: ${locationName} (${latitude}, ${longitude})`;
}
// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));

const concatenateArrays = <T>(...arr: T[][]): T[] => {
  const result = arr.reduce((acc, curr) => acc.concat(curr));
  return result;
};
// console.log(concatenateArrays(["a", "b"], ["c", "d"]));
// console.log(concatenateArrays([1, 2], [3, 4], [5]));
// console.log(concatenateArrays([]));

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  const popularCourses = courses.filter(
    (course) => course.isPublished && course.students >= minStudents,
  );
  return popularCourses;
};

const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
];
// console.log(getPopularCourses(courses, 80));

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
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
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}
  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }
  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name} `;
  }
}
const manager = new Manager("Alice", 50000, "Engineering");
// console.log(manager.getDetails());
// console.log(manager.getRoleInfo());

const validateAgeAsync = async (age: number): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
};

const test = async () => {
  try {
    const result1 = await validateAgeAsync(20);
    console.log(result1);
  } catch (error) {
    console.error(error);
  }

  try {
    const result2 = await validateAgeAsync(15);
    console.log(result2);
  } catch (error) {
    console.error(error);
  }
};

test();
