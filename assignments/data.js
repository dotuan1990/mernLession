// import student1 from "./assign.js"
// console.log(student1.getDetails())

// var index = 0
for(index = 0; index < 5; index++){
    setTimeout(function(){
        console.log(index)
    }.bind(index),2000)
}


function Addition(a,b){
    return this.first + this.second +a +b
}
var Value = {first:5, second:6}
console.log(Addition.call(Value,0,0)
)
// console.log(index)