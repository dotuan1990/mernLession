const heroes = [
    { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
    { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
    { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
    { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
    { name: 'Batman',         family: 'DC Comics', isEvil: false },
    { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
    { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
    { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
    { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
  ]
// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
// a. Get heroes who are not evils
const notEvilHeroes = heroes.filter(hero => !hero.isEvil);
console.log(notEvilHeroes);
// b. Print Unique family names
const uniqueFamilies = [...new Set(heroes.map(hero => hero.family))];
console.log(uniqueFamilies);
// c. Print Hero Names from given objects, and append sir in each of them before printing
const heroNamesWithSir = heroes.map(hero => `Sir ${hero.name}`);
console.log(heroNamesWithSir);
// d. Do we have any hero in Marvel Family who is not evil
const hasNonEvilMarvelHero = heroes.filter(hero => hero.family === 'Marvel' && !hero.isEvil);
console.log(hasNonEvilMarvelHero);


//2. Use the spread and rest operator to create a function which can multiply numbers from 1...n (n is the number of choice)
const multiply = (...numbers) => {
    return numbers.reduce((acc, num) => acc * num, 1);
};
const multiplyUpToN = (n) => {
    // Create an array of numbers from 1 to n
    const numbers = Array.from({ length: n }, (_, i) => i + 1);
    // Use apply to call the multiplyNumbers function with the array
    return multiply.apply(null, numbers);
};
  console.log(multiplyUpToN(5));
//3. Print the last name through destructuring and add a contact number:9119119110 as well
const person = {
    userDetails :{
        first: "FirstName",
        last: "LastName"
    }
}
person.userDetails.contactNumber = '9119119110';
const { userDetails: { last, contactNumber } } = person;
console.log(last, contactNumber);

//4. Give me an example of const data manipulation
const myConstArray = [1, 2, 3];
myConstArray.push(4); // Allowed because we're modifying the array
// myConstArray = [5, 6, 7]; // Not allowed: TypeError: Assignment to constant variable.

//5. What is the difference between for-of and for-in show with examples
const array = [10, 20, 30];
const object = { a: 1, b: 2, c: 3 };

// for-of: Iterates over iterable objects (like arrays)
for (const value of array) {
    console.log(value);
}
  
// for-in: Iterates over the keys of objects
for (const key in object) {
    console.log(key); 
}

//6. Give me an example of bind and write its usage, comparison with arrow function
function greet() {
    console.log(`Hello, ${this.name}`);
}

const person1 = { name: 'Tuan' };
const boundGreet = greet.bind(person1);
boundGreet(); 

const person2 = { name: 'Bob' };
const arrowGreet = () => console.log(`Hello, ${this.name}`);
const greetBob = arrowGreet.bind(person2); // `this` remains the global context
greetBob(); // Output: Hello, undefined (unless in a module scope)

//7. Create an example showing usage of event loop in concurrent execution cycle
console.log('Start');

setTimeout(() => {
  console.log('Timeout 1');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 1');
});

setTimeout(() => {
  console.log('Timeout 2');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 2');
});

console.log('End');
//8. create an example showing usage of short hand and default param.
const add = (a, b = 5) => a + b; // Default parameter
console.log(add(2));
console.log(add(2, 3));

//9. Create two objects with some properties and merge them using Object method and ES6 way
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

// Using Object.assign
const mergedObj1 = Object.assign({}, obj1, obj2);
console.log(mergedObj1);

// Using Spread operator
const mergedObj2 = { ...obj1, ...obj2 };
console.log(mergedObj2);

//10. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc
// Map Example
const map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
map.set('key3', 'value3');

console.log(map.get('key1'));
console.log(map.has('key2'));
map.delete('key3');
console.log(map.size);

// Set Example
const set = new Set();
set.add(1);
set.add(2);
set.add(3);

console.log(set.has(1));
set.clear();
console.log(set.size);
//11. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ES6 Features: Arrow functions, Promises, Classes, Modules, Destructuring'), 2000);
    setTimeout(() => reject('Error!'), 3000);
});
  
promise
.then(console.log)
.catch(console.error);
  
//12. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
// Repeated of question 2
//13. Use the question #11 to build promises using async and await - with multithread
const asyncFunction = async () => {
    try {
      const result = await promise;
      console.log(result);
    } catch (error) {
      console.error(error);
    }
};
  
  asyncFunction();
  
//14. Create an example of generator function of your choice
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}
  
  const gen = generator();
  console.log(gen.next().value); 
  console.log(gen.next().value); 
  console.log(gen.next().value); 
  
//15. Explain your knowledge of - statelessness, http, REST, spa and classical applications
// Statelessness: Refers to the design where no session information is stored on the server. Each request from the client contains all the information needed to process it.
// HTTP: Hypertext Transfer Protocol is the foundation of data communication on the web. It is stateless and works on a request-response model.
// REST: Representational State Transfer uses HTTP requests to access and use data.
// SPA (Single Page Application): A web application that loads a single HTML page and dynamically updates the content as the user interacts with the app, without refreshing the page.
// Classical Applications: Multi-page applications where each interaction may require a full page reload and state is maintained on the server.