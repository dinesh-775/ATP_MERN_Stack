// premetive datatype is imutable 
console.log("-------------------")

var ba = 10
ba += 1
console.log(ba)

// all reference type are mutable
console.log("-------------------")

let emp = {
    eno: 1,
    name: "dinesh"
}
console.log(emp.eno)

emp.city = "Hyderabad"
emp.eno = 48

console.log(emp)

delete emp.name

console.log(emp)
// freezing an object: cannot modify
Object.freeze(emp)
emp.name = "Dinesh"
emp.eno = 480

console.log(emp)

console.log("Keys : " + Object.keys(emp))
console.log("Values : " + Object.values(emp))

// Unpack the object
console.log("-------------------")

let test = {
    a: 1,
    b: 2,
    c: 3
}

//unpacking
//variable name should be same as key of an object
//destructuring
let { a, b, c } = test
console.log(b)
console.log(a)
console.log(c)

///
console.log("-------------------")

let student = {
    roll: 48,
    name: 'Dinesh',
    marks: [86, 80, 80],
    address: {
        city: 'Hyderabad',
        pincode: 500079
    },
    getAverage: function () {
        let average = 0
        for (i of this.marks) {
            average += i
        }
        average /= this.marks.length
        console.log("Average: " + average)

    }
}
console.log(student.address)
console.log(student.address.city)
student.getAverage()

console.log("-------------------")

// Pass a function as argument to another function

function test1(a) {
    console.log(a())
    console.log(a)
}

test1(function () {//anonymous function as argument
    //function called by application
    return "Hello"
})

console.log("-------------")
