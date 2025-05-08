/**
 * problem: 1
 * @ solution
 */

 function formatString(input: string, toUpper?: boolean): string{
    if(toUpper===false){
        return input.toLowerCase();
    }
    else{
        return input.toUpperCase()
    }
 }

// console.log(formatString("Hello"));          // Output: "HELLO"
// console.log(formatString("Hello", true));   // Output: "HELLO"
// console.log(formatString("Hello", false));  // Output: "hello"