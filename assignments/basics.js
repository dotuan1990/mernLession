// =============Q1.===================
// Variables and data type
// JavaScript has dynamic types: string, number, boolean, object, undefined, null.
var number = 42; // Number
var name = "Alice"; // String
var isActive = true; // Boolean

// Arrays
// type of data type
var colors = ["red", "green", "blue"];
console.log(colors[0]); // Output: red

// Objects
// type of data type
var user = {
    username: "alice123",
    age: 25
};
console.log(user.username); // Output: alice123

// Function
// Blocks of code designed to perform a specific task
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Teacher"))

// Scope
// the accessibility of variables. local var will be garbaged collect when there is no reference to it
var globalVar = "I'm global!";
function scopeExample() {
    var localVar = "I'm local!";
}

// Prototypes
// An object that provides a way to implement inheritance in JavaScript.

function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function() {
    return `${this.name} makes a noise.`;
};
var animal = new Animal("dog")
console.log(animal.speak())

// Hoisting
// JavaScript's default behavior of moving declarations to the top of the current scope.
// Only work with var, not let or const
console.log(hoistedVar); // undefined
var hoistedVar = "I'm hoisted!";

// Closures
// Functions that remember their outer variables even when the function is executed outside that scope.

function outer() {
    var outerVar = "I'm from outer!";
    return function inner() {
        return outerVar;
    };
}
var callInner = outer()
console.log(callInner())

// Arrow Functions
// Shorter syntax for writing function expressions

const add = (a, b) => a + b;

// Modules
// Allowing code to be divided into reusable pieces using import/export.

// export const PI = 3.14;
// import { PI } from './basics.js';
// =============Q2.===================
var variable;
variable = "Robert ";
console.log(variable, typeof variable); 

variable = 0.0266;
console.log(variable, typeof variable);

variable = false;
console.log(variable, typeof variable);

variable = { myname: "Test Me" };
console.log(variable, typeof variable); 

variable = 25166665;
console.log(variable, typeof variable);

variable = undefined;
console.log(variable, typeof variable);

variable = true;
console.log(variable, typeof variable);

variable = "Robert Jr.";
console.log(variable, typeof variable);

variable = null;
console.log(variable, typeof variable);

variable = {};
console.log(variable, typeof variable);

variable = -32767;
console.log(variable, typeof variable);
// =============Q3.===================
function showUserInfo(firstname, lastname , age){
    console.log(`First Name: ${firstname}`);
    console.log(`Last Name: ${lastname}`);
    console.log(`Age: ${age}`);
}
showUserInfo("Tuan", "Do", 30);
// =============Q4.===================
function doaddition(a,b,c){
    return a+b+c;
}
console.log(doaddition(2,3,4))
console.log(doaddition(2)) // need 3 arguments
console.log(doaddition(2.3,3))// need 3 arguments
console.log(doaddition("first", 2, "three"))// because of auto cast feature, 2 is converted to string and concat with others
// =============Q5.===================
// a. closure
function createCounter() {
    let count = 0; // `count` is a private variable
    return function() {
        count++; // The inner function can access `count`
        return count;
    };
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter.count);
// b. hoisting
console.log(myVar); // undefined (due to hoisting) myVar is defined but havent initialized yet
var myVar = 5;
console.log(myVar); // 5

myFunc(); // Works, even before it's defined
function myFunc() {
    console.log("Hello, world!");
}
// c. constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

var john = new Person("Tuan", 30);
console.log(john.name); 
console.log(john.age);  
// =============Q6.===================
/*
    Call: change global or scope of method is called. Give this. values and arguments 
        function greet(greeting) {
            console.log(`${greeting}, my name is ${this.name}`);
        }
        var person = { name: "Tuan" };
        greet.call(person, "Hello"); // "Hello, my name is Tuan"
    Apply: same with call but argument must be array.
    Bind: same with call but can be invoked later
        var greetHi = greet.bind(person, "Hi");
        greetHi();
*/
// =============Q7.===================
var Student = {
    name: "Tuan",
    age: 20,
    introduce: function() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
// Using setTimeout with bind to fix the context
setTimeout(Student.introduce.bind(Student), 1000);
setTimeout(() => Student.introduce(), 1000);

// =============Q8.===================
// no/null prototype, it doesn't inherit any properties or methods from Object.
var nullObject = Object.create(null);
console.log(nullObject)
// =============Q9.===================
var obj1 = { a: 1, b: 2 };
var obj2 = { b: 3, c: 4 };
var mergeObject = Object.assign(obj1, obj2)
console.log(mergeObject)
// =============Q10.===================
export default mergeObject;

