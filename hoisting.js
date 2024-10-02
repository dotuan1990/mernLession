// Example of function hoisting
hoistedFunction(); // Works due to hoisting

function hoistedFunction() {
  console.log("This function is hoisted!");
}

// Example of variable hoisting
console.log(x); // Output: undefined (not an error)
var x = 5;