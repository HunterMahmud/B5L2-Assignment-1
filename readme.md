
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
type Name = {
  name: string;
};

type Age = {
  age: number;
};

type Person = Name & Age;

const person: Person = {
  name: "Hasan Al Mahmud", // if one of the property is missing then it will give an error
  age: 25,
};
```

Here, `person` must have **both** `name` and `age` because we used `Name & Age`.



## Summary

* Use **Union** when your variable can be of **multiple types**, but only **one at a time**.
* Use **Intersection** when your object or variable needs to have **multiple types/properties together**.


