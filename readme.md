# 3. Explain the difference between `any`, `unknown`, and `never` types in TypeScript.

In TypeScript, `any`, `unknown`, and `never` are three special types in typescript that behave differently. We will discuss below in simple terms with some examples.

---
## `any` Type

The `any` type is the most flexible type. It means **“I don’t care about the type”** — anything can be assigned, and TypeScript won’t give any error.

It basically turns off type checking for that variable and accept any types value. There is no difference between Javascript or Typescript if we use any type.

### Example:

```ts
let value: any;

value = 10;         // OK
value = "hello";    // OK
value = true;       // OK

value.toFixed();    // No error, even if value is not a number
```

 **Downside:** You lose TypeScript's type safety. It’s like we are using JavaScript.

---

## `unknown` Type

The `unknown` type is like a **safer version of `any`**.
You can assign any value to it, but you **can’t use it directly** unless you do a type check.

It forces to check the type before using.

### Example:

```ts
let input: unknown;

input = "hello";   // OK
input = 42;        // OK

// input.toUpperCase(); it will gives an Error: Object is of type 'unknown'

if (typeof input === "string") {
  console.log(input.toUpperCase());  // Works only after type check
}
```

 **Good for security & API data validation.**

---

## `never` Type

The `never` type means something that **never happens**.
This is used for functions that throw errors or have infinite loops.

### Example: Function that never returns any type

```ts
function throwError(): never { // because this function will never return anything thats why its return type is never
  throw new Error("Something went wrong");
}
```

---

## Summary

Type `any` accept any value but not type safety. 
Type `unknown` accept any value but can only use after type checks.
Type `never` can't accept anything and no type safety needed.

---

## When to use

Use `any` only when absolutely needed and no other way.
Use `unknown` when you expect something, but want to be safe.
Use `never` when something truly can’t happen — this helps TypeScript catch logic bugs.



</br>
</br>
</br>



# 7. Provide an example of using union and intersection types in TypeScript.

## What is Union Type?

In TypeScript, **Union Type** allows a variable to be **one of many types**. We use the `|` (pipe) symbol to define union types.

Example:  
“It will be one of A or B then okay.”

### Simple Example:

```ts
let id: number | string;

id = 101;         // valid
id = "A2023";     // this one is also valid
// id = true;     // it will give an error
```

### Real Function Example:

```ts
function printId(id: number | string) {
  console.log("Your ID is:", id);
}

printId(555);           // Output: Your ID is: 555
printId("ID-123");     // Output: Your ID is: ID-123
```

---

## What is Intersection Type?

**Intersection Type** means combining multiple types together into one and both types should be present the property. We use the `&` (ampersand) symbol to define it.

Example:
“Must have A **and** B both.”

### Simple Example:

```ts
type TName = {
  name: string;
};

type TAge = {
  age: number;
};

type TPerson = TName & TAge;

const person: TPerson = {
  name: "Hasan Al Mahmud", // if one of the property is missing then it will give an error
  age: 25,
};
```

Here, `person` must have **both** `name` and `age` because we used `TName & TAge`.

## Summary

Use **Union** when your variable can be of **multiple types**, but only **one at a time**.
Use **Intersection** when your object or variable needs to have **multiple types/properties together**.


