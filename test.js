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