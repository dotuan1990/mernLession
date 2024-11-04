//Spread : is used to spread the elements of any object or array to be used one by one
// It is done by using ... (spread the object)

// let nameList = ["Duncan", "Windie", "Hongbo", "Michael"]
// console.log(nameList[0])
// console.log(nameList[1])

// console.log(...nameList)

let user = {
    id : 101,
    name : "Afroj",
    userType : "Paid",
    allowedReview : true,
    balance : "$1000",
    mobile : 89898898989
}

let addresses = {
    id : 101,
    homeAddress : "Somewhere in colorado",
    officeAddress : "Somehere in Atlanta"
}

//let delivery = Object.assign({}, user, addresses)
// let delivery = {...user, ...addresses} 
// addresses.available = "5PM" //Preserves the immutability
// console.log(delivery)

// delivery = {...user, ...addresses} 
// console.log(delivery)


//Rest - parameter and operator : any array data can be passed as rest parameter in any function, but it should be 
// the last parameter, also when we try to assign values to rest operator it should be the last literal

let add = (a=0,b=0,c=0,d=0,e=0)=> a+b+c+d+e
let numberList = [1,2,3,4,5,6,7]
console.log(add(...numberList)) //<usage of spread operator>
// console.log(add(numberList)) // because it's passing an array instead of individual numbers, 
                                // it ends up concatenating the array into a string. 1,2,3,4,5,6,70000
//we can use spread parameter instead for dynamic count of params

let addMax = function(...restNumberList) { //rest : param can accept any number of params
    let sum = 0

    sum = restNumberList.reduce((prevNum, currNum)=>{
        return prevNum + currNum
    },0)

    return sum;
} 

// console.log(addMax(...numberList)) //doest the job of passing dynamic and large list to be used in function

// console.log(addMax.apply(null, numberList)) //using apply function attached with each function to accept parameters as an array



//Questions :
//Spread Operator - 
//create a list of vaccines and print
//create doctor object and print his qualifications and other details using spread
//create a vaccine object with details like - name, no of doses required, price etc and merge it with nearest doctor object using spread
const vaccines = ["COVID-19", "Flu", "Hepatitis B", "MMR", "Tdap"];
console.log("List of Vaccines:", vaccines);
const doctor = {
    name: "Dr. Tuan",
    qualifications: ["MD", "PhD", "Board Certified"],
    specialization: "Pediatrics",
    experience: "10 years"
};
console.log("Doctor Details:");
console.log("Name:", doctor.name);
console.log("Qualifications:", ...doctor.qualifications);
console.log("Specialization:", doctor.specialization);
console.log("Experience:", doctor.experience);
const vaccineDetails = {
    name: "COVID-19",
    dosesRequired: 2,
    price: 20
};
const doctorWithVaccine = {
    ...doctor,
    // vaccine: vaccineDetails //same result
    vaccine: {...vaccineDetails}
};
console.log("Doctor with Vaccine Details:", doctorWithVaccine);

//Rest Parameter - 
//create a function which accepts start and end of number and generates a array of that size, [100....150]
//then use this array to pass as spread operator into a function named largesum
//in largesum we should accept the array in rest parameter (...arrayOfNums), and then add the numbers
let generateArray = function(start, end){
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

let largeSum = function(...array){
    return array.reduce((num1, num2)=>{
        return num1+num2
    },0)
}
let start = 100;
let end = 150;
let numbersArray = generateArray(start, end);
let sum = largeSum(...numbersArray);

console.log(numbersArray); // [100, 101, 102, ..., 150]
console.log(sum); // Sum of numbers from 100 to 150