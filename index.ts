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
