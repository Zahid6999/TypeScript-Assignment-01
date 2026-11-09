type hierarchy work

any: nothing data type its dosenot check type
unknown: its mean define time type unknown but useing time assign type if assign ok but not assign give the error
never: mainly use error handling its heairky bottom type its to branch to switch

# Type Hierarchy

any: Represents any data type and bypasses type checking completely.

unknown: Represents a value whose type is not yet known. Operations cannot be performed on it until it is assigned or narrowed to a specific type, otherwise it throws an error.

never: The bottom type in the type hierarchy. Primarily used for functions that throw errors or for exhaustive type checking in switch/branch logic.
