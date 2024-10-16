// let productList = [{product1},{product2},{product3},{product4},{product5}]
// for (let index = 0; index < productList.length; index++) {
//     const element = productList[index];
//     element["productField"]
// }
let object = {fname:"tuan", lname:"do"}
for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(`${key} ${element}`)
    }
}

let arr = [3,5,6] // {0:3, 1:5, 2:6}
arr.push("Eight")
arr.newKey="test"
arr["NextItem"] = "new"
arr["9"] = "aa"
arr.push("d")
console.log(arr)
for(const key in arr){
    console.log(`${key} ${arr[key]}`)
}

for (const element of arr) { // array only
    console.log(element) // only int key work
}
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// array.forEach(element => {
    
// });