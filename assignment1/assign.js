// Questions -
// Create a Person <few properties and a function to return them> and Inherit it as Student class and override the function
// Inherit should be done both way's constructor and Object.Create
// Create three objects and merge their propeties
// Create a logical example of closure
// Share few data objects from one file to another

class PersonClass {
    constructor(name, phone, income) {
        this.name = name
        this.phone = phone
        this.income = income;
        this.ssn = "secret"
    }
    
    getDetails(){
        return `
            ${this.name}
            ${this.phone}
            ${this.income}        
        `
    }
}


class StudentClass extends PersonClass{
    constructor(name, phone, income, studentId) {
        super(name, phone, income);
        this.studentId = studentId;
    }
    getDetails(){
        return `
            ${this.name}
            ${this.phone}
            ${this.income}    
            ${this.studentId}    
        `
    }
}

// Example usage of constructor inheritance
var student1 = new StudentClass('Tuan', 123, '$200000', '123456');
console.log(student1.getDetails());
// Create a Student object using Object.create
var student2 = Object.create(StudentClass.prototype)// inherit from Student class
//var studentObj = Object.create(Student.prototype)// inherit from student1 object
student2.name = 'Object'
console.log(student2)

// Merge
var student3 =  new StudentClass('student3', 123, '$200000', '123456');
student3.job = "Tutor"
var mergeObject = Object.assign(student1, student2, student3)
console.log(mergeObject)

//closure
function Person(name, phone, income){
    var personName = name
    var personPhone = phone
    var personIncome = income;
    var personPassword = "secret"
    var getDetails = function(name, pass){
        if (pass == personPassword) {
            return { 
                personName,personPhone,personIncome
            }
        } else {
            return "Password is incorrect!!"
        }
    }
    return getDetails
}
var person = Person("test",1231321,"$1234444")
console.log(person("test", "secret"))

//Share few data objects from one file to another
export default student1

