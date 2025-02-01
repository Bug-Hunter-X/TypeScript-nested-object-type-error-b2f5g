# TypeScript Nested Object Type Error

This repository demonstrates a common TypeScript error related to type checking of nested objects.  When adding a new property to a nested object, TypeScript may throw an error if the original type definition doesn't account for the new property. This example focuses on a scenario where an object's property, which is also an object, might have properties added during runtime or as new requirements. This will lead to TypeScript compiler errors.

## How to reproduce

1. Clone the repository.
2. Open `bug.ts` to examine the initial code.
3. Attempt to add a new property (e.g., `zipcode`) to the `address` object within `myObject`.  The compiler will report a type error because `address` is not defined with that property.
4. Now check `bugSolution.ts` which shows how to fix this issue

## Solution
The provided solution illustrates several methods to resolve the type error.

### Using type assertion

One way to handle this is by using a type assertion, explicitly telling the TypeScript compiler to treat `obj` as `any`. However, this is often not recommended as it sacrifices type safety. It may work for smaller projects but is not a best practice.

### Using interfaces

The best method is to define an interface to specify the exact type of nested objects, allowing extensibility and clarity.

### Using index signatures

If you expect a larger number of additional properties in the nested object and you want your code to be flexible, then index signatures in TypeScript may be the solution.