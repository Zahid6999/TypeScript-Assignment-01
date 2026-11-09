# Type Hierarchy: any, unknown, and never

TypeScripts type system is organized into a formal type hierarchy with Top and Bottom types.

any: Represents any data type without type compile check type allowing any operations without type compile.
unknown: Represents a value whose type is not yet known. Unlike any, operations cannot be performed on it until it is narrowed or verified through type checks.
never: The bottom type in the type hierarchy. It represents values that never occur and is primarily used functions that throw errors or for exhaustive checks in switch cases.

## Why unknown is Always Preferred Over any

Using any disables TypeScript's safety features

let unsafe: any = "Hello World";
unsafe.notAFunction();
