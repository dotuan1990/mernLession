console.log("Hello");
var i = 1000;
// setInterval(function(){
//     console.log(++i)
// }, 5)

function sum(a, b) {
    console.log(this)
  return a + b;
}
x = sum(6, 10);
console.log(x);

x = "the"
console.log(x)
x= "222"
console.log(x)
x = undefined
console.log(x)
console.log(typeof x)
x = null
console.log(typeof x)
console.log(x)

function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet('Alice')); 

const add = function(a, b) {
  return a + b;
};
console.log(add(5, 3));

const multiply = (x, y) => x * y;
console.log(multiply(4, 2));

(function() {
  console.log('Hello World!');
})();

function operateOnNumbers(a, b, operation) {
  return operation(a, b);
}

const result = operateOnNumbers(6, 3, (x, y) => x - y);
console.log(result);

//5.Nested functions
function A(a){
  return function B(b){
      return function C(c){
          return function D(d){
              return a+b+c+d
          }
      }
  }
}
var objA= A("Hi ")
var objB= objA("guys! ")
var objC= objB("My name is: ")
var objD= objC("Windie")
console.log(objC)


// var newVal = "Interesting"
// function Random(){
//   console.log(window.newVal)
//   var newVal = "Interested"
//   VeryRandom()
//   function VeryRandom(){

//     console.log(newVal)
//     var newVal = "Interested"
//   }
// }

// Random()
var newVal = "Interesting"; 
function Random() {
  console.log(newVal); //No way to access global variable
  var newVal = ""; 
}
Random(); 

const account = {
  accountHolder: 'Tuan',
};

function printAccountDetails(account, callbackFunction) {
  const message = `Account name: ${account.accountHolder}:\n`
  callbackFunction(message);
}

function displayInfo(message) {
  console.log(message)
}
printAccountDetails(account, displayInfo);
const sessions = [
  { time: '10:00 AM', activity: 'Team Meeting' },
  { time: '1:00 PM', activity: 'Project Review' },
];

function displaySessions(sessions, callback) {
  sessions.forEach(session => {
      const sessionMessage = `Session at ${session.time}: ${session.activity}`;
      callback(sessionMessage);
  });
}
displaySessions(sessions, displayInfo);