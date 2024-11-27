
let uniqueIdentifier: string | number;

uniqueIdentifier = "Hello"; // valid
uniqueIdentifier = 42;      // valid
uniqueIdentifier = true;    // Error: Type 'boolean' is not assignable to type 'string | number'.
