//March - MERNStack Session - Assessment Number 1 - 2nd October 2024
//Q1. Create a file with name basics and show all the features that you know about javascript?
// Try explaining in 1-2 lines : example - Prototype : An object which behaves as a link between two functions and provides inheritance

//Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable
// and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767

//Q3. Create a function with name showUserInfo, this function expects three params, firstname, lastname and age
//  print all the details in the given function

//Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers
// below output needs to be monitored - add(2,3,4), add(2), add(2.3,3), add("first", 2, "three")
// analyse the outputs we get and try explaining the reasons behind!!

//Q5. Give me an example of your choice for each of the below concepts
// a. closure, 
// b. hoisting, 
// c. constructor function

//Q6. What is the purpose of call, apply and bind ? and why they are used ? whats the difference between bind and apply ?

//Q7. Create an example of bind using Student object, where a function returns data with SetTimeOut and we fix it by bind.

//Q8. Create an example of creating object with null prototype

//Q9. How do we merge different objects properties using Object class function

//Q10. Create an object literal and export it to another file and import and show that there


console.log("Start")
setTimeout(function(){
    console.log("time 1")
    setTimeout(function(){console.log("inner")})
},1000)
setTimeout(function(){
    console.log("time2")
},2000)
setTimeout(function(){
    console.log("time3")
},1000)
setTimeout(function(){
    console.log("time4")
},1000)
console.log("end")
let i = 0; // Initialize the counter

// const intervalId = setInterval(() => {
//     console.log(i); // Print the current value of i
//     i++; // Increment i
    
//     // Clear the interval when i reaches 10000
//     if (i >= 10) {
//         clearInterval(intervalId);
//     }
// }, 1000); 
// for(i = 0; i < 10000; i++){
//     console.log(i)
// }