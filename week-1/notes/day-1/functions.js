//Print hello world in console
console.log("------------------------")
console.log(`Hello World!`)
console.log("------------------------")
//variables
//Variables dont have datatype in sj but value have
let a = 100 // int a=100

let username = 'Dinesh' // String username="dinesh"

let marks = [10, 20, 30] // object

let student = {
    sno: 1,
    name: 'Dinesh'
}

let b // datatype is undefined
console.log(b)
console.log(typeof b)
b = "Dinesh"
console.log(b)
console.log(typeof b)
b = true
console.log(b)
console.log(typeof b)

console.log(student)
console.log("------------------------")

//premetive datatypes are stored in stack in side memory(RAM)
//objects are stored in heap memory
//when program execute stack and heap memory are created

// Function declaration

function sumOfTwoNumbers(a, b) {
    let sum = a + b
    return sum
}

// Function calling
let val = sumOfTwoNumbers(30, 20)
console.log(val)

console.log(typeof sumOfTwoNumbers)
console.log("------------------------")

//write a function to find the big number of three numbers

function largest(a, b, c) {
    let var1 = a, var2 = b, var3 = c

    if (var1 > var2 && var1 > var3) {
        return var1
    }
    else if (var2 > var1 && var2 > var3) {
        return var2
    }
    else {
        return var3
    }
}

let result = largest(10, 20, 30)
console.log(result)
console.log("------------------------")

//calulation

let totalamount = 0
totalamount += 500
totalamount += 1200
totalamount -= 200
let gst = (totalamount / 100) * 18
totalamount += gst
console.log(totalamount)

console.log("------------------------")

//perators
let x = 100, y = 10
console.log(x = y)
y = "10"
console.log(x == y)
console.log(x === y)

console.log("------------------------")

// smart login status engine

let isLoggedIn = true
let isProfileComplete = true
if (isLoggedIn != true) {
    console.log("Please login")
}
if (isLoggedIn === true && isProfileComplete === false) {
    console.log("Complete your profile")
}
if (isLoggedIn === true && isProfileComplete === true) {
    console.log("Welcome back!")
}
console.log("------------------------")

//course price tag labeler

let price = 999
let courseTag = tagLabeler(price)
function tagLabeler(price) {
    if (price < 500) {
        return "Budget Course"
    }
    if (price >= 500 && price <= 1000) {
        return "Standard Course"
    }
    if (price > 1000) {
        return "Premium Course"
    }
}

console.log(courseTag)

console.log("------------------------")
//
//
//