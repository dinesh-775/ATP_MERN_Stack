//function declaration 
function findSum(a, b) {
    return a + b
}

//function as expression
let findSum1 = function (a, b) {
    return a + b
}

//Arrow Function
let findSum2 = (a, b) => { return a + b }
//0r
let findSum3 = (a, b) => a + b
console.log('--------------')

console.log(findSum3(1, 2))

//
console.log('--------------')
//filter
let marks = [10, 30, 89, 65, 45]
let rel = marks.filter(element => element < 70)
console.log(rel)
console.log('--------------')
//map
let rel1 = marks.map(element => element + 5)
console.log(rel1)
console.log('--------------')

//reduce
let rel2 = marks.reduce((accumulator, element) => accumulator + element)
console.log(rel2)
console.log('--------------')
//reduce for min
let rel3 = marks.reduce((accumulator, element) => accumulator < element ? accumulator : element)
console.log(rel3)
console.log('--------------')

// find min
function min(mar) {
    let small = marks[0]
    for (i of marks) {
        if (i < small) {
            small = i
        }
    }
    return small
}
console.log(min(marks))
console.log('--------------')


//find

let rel12 = marks.find(element => element === 65)
console.log(rel12)
console.log('--------------')

//findIndex
let rel11 = marks.findIndex(element => element === 65)
console.log(rel11)
console.log('--------------')


//students(array of objects)
let students = [
    { sno: 1, name: 'ravi', age: 21 },
    { sno: 2, name: 'vikas', age: 19 },
    { sno: 3, name: 'manoj', age: 15 },
    { sno: 4, name: 'madhu', age: 30 }
];

//find student age less than 20
let r = students.filter(element => element.age < 20)
console.log(r)

// increment age by 2 year for monaj
let r1 = students.map(element => {
    if (element.name === "manoj") {
        return {
            sno: element.sno,
            name: element.name,
            age: element.age + 2
        }
    }
    return element
})
console.log(r1)
//or
let r2 = students.map(ele => ele.name === 'manoj' ? ele.age += 2 : ele.age)
console.log(r2)
//
let r3 = students.reduce((a, e) => a + e.age, 0)
console.log(r3)

//
let r4 = students.findIndex(ele => ele.name === 'manoj')
console.log(r4)