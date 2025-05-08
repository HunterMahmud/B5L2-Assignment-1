/**
 * problem: 1
 * @solution
 */

function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLowerCase();
  } else {
    return input.toUpperCase();
  }
}

// console.log(formatString("Hello"));          // Output: "HELLO"
// console.log(formatString("Hello", true));   // Output: "HELLO"
// console.log(formatString("Hello", false));  // Output: "hello"

/**
 * problem: 2
 * @solution
 */

interface IItem {
  title: string;
  rating: number;
}

function filterByRating(items: IItem[]): IItem[] {
  return items.filter((item) => item.rating > 4);
}

// const books: IItem[] = [
//     { title: "Book A", rating: 4.5 },
//     { title: "Book B", rating: 3.2 },
//     { title: "Book C", rating: 5.0 }
//   ];

//   console.log(filterByRating(books));
// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]

/**
 * problem: 3
 * @solution
 */

function concatenateArrays<T>(...arrays: T[][]): T[] {
  let array: T[] = [];
  arrays.forEach((arr) => {
    array.push(...arr);
  });
  return array;
}

// console.log(concatenateArrays(["a", "b"], ["c"]));       // Output: ["a", "b", "c"]
// console.log(concatenateArrays([1, 2], [3, 4], [5]));     // Output: [1, 2, 3, 4, 5]
// console.log(concatenateArrays([]));     // Output: [1, 2, 3, 4, 5]

/**
 * problem: 4
 * @solution
 */

class Vehicle {
    private make: string;
    private year: number;
    constructor(make: string, year: number){
        this.make = make;
        this.year = year;
    }

    getInfo(){
        return `Make: ${this.make}, Year: ${this.year}`
    }
}

class Car extends Vehicle{
    private model: string;
    constructor(make: string, year: number, model: string){
        super(make, year);
        this.model = model;
    }

    getModel(){
        return `Model: ${this.model}`;
    }
}

// const myCar = new Car("Toyota", 2020, "Corolla");
// console.log(myCar.getInfo());   // Output: "Make: Toyota, Year: 2020"
// console.log(myCar.getModel());  // Output: "Model: Corolla"