//Create two examples of your own choice to make a map and a weak map
// and a list of unique names of 10 states of your favrourite country you wish to visit on world tour

let normalMap = new Map();
normalMap.set('California', 'Sacramento');
normalMap.set('Texas', 'Austin');
console.log(normalMap);

let weak_Map = new WeakMap()
let user = {name:'Tuan'}
weak_Map.set(user,{age:19})
// weak_Map.set('hello',{age:19})

console.log(weak_Map) 
// it does not expose its items for direct inspection. 
//This is a feature of WeakMap that helps manage memory efficiently, 
//allowing for garbage collection of keys when there are no other references to them.

console.log(weak_Map.get(user))

// console.log(weak_Map.get('hello')) //WeakMap keys must be objects

//Questions for practice

//print firstname, total marks and Individual Subject Marks, using object and nested destructuring
//along with that also create a lastname and Ecology as (marks) "95", without making any change in Student

// Original Student object
const Student = {
    firstName: 'John',
    marks: {
        math: 85,
        science: 90,
        english: 88,
    },
    getTotalMarks() {
        return Object.values(this.marks).reduce((total, mark) => total + mark, 0);
    },
};

// Destructuring firstName, marks, and getTotalMarks method
const { firstName, marks } = Student;

// Adding last name and Ecology marks without modifying the original object
const lastName = 'Do'; // New last name
const ecologyMarks = 95;   // Ecology marks

// Calculating total marks including Ecology
const totalMarks = Student.getTotalMarks() + ecologyMarks;

// Printing the results
console.log(`First Name: ${firstName}`);
console.log(`Last Name: ${lastName}`);
console.log(`Total Marks: ${totalMarks}`);
console.log('Individual Subject Marks:');
console.log(`Math: ${marks.math}`);
console.log(`Science: ${marks.science}`);
console.log(`English: ${marks.english}`);
console.log(`Ecology: ${ecologyMarks}`);

//create an array of your aspirations, print first three to achieve in 2024,25,26 and keep others in ...rest operator, using array destructuring 
let aspirations = [
    "Find a job",
    "Travel to Japan",
    "Run a marathon",
    "Save for a house",
    "Lose weight",
  ];
let [aspiration2024, aspiration2025, aspiration2026, ...restAspirations] = aspirations;
console.log("Aspirations for 2024, 2025, and 2026:");
console.log(aspiration2024);
console.log(aspiration2025);
console.log(aspiration2026);
console.log("Other aspirations:", restAspirations);

//create a funtion with name multiply which accepts three parameters, and return multiplication of all
//but if we dont pass any parameter it returns 0
function multiply(a = 0, b = 0, c = 0) {
    if (a === 0 && b === 0 && c === 0) {
      return 0;
    }
    return a * b * c;
  }

//create an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop
let arr = [1, 2, 3, 4, 5];
let newval = 6;
arr[5] = newval;
console.log("Using for...of loop:");
for (const value of arr) {
  console.log(value);
}
console.log("Using for...in loop:");
for (const index in arr) {
  console.log(arr[index]);
}
//create an example of const where we can update on property of the object, where it says const is mutable
const person = {
    name: "Tuan",
    age: 30
  };
person.age = 31;
person.city = "Phoenix";
console.log(person);
delete person.age
console.log(person)
// person = {hello:"world"} // cannot reassign to new obj

//create a for loop using var and let, print each value in timeout after 2 second and try to 
//demonstrate functional scope of var and lexical of let 
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i);
    }, 2000);
}
for (let j = 0; j < 3; j++) {
    setTimeout(function() {
      console.log(j);
    }, 2000);
}
//var behaves with function scope, while let respects block scope.