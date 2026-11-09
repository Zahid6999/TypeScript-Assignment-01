# Type vs Interface

1. Type Alias: Used to assign a type to any value. It can define primitives, unions, tuples, and objects. Its primary use cases include literal and union types.

2. Interface: Primarily used to define the shape of objects, classes, and methods. Declaring multiple interfaces with the same name merges them without throwing an error. Its primary use cases include API data, object structures, and functions.

## Type Example

type NameConventionFirstCharacterMustBeUpperCase = number | string | boolean;
type Role = 'admin' | 'moderator' | 'user';

## Interface Example

interface User {
name: string;
role: "CEO" | "CTO";
salary: number;
}
