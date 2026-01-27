let skills = ['HTML', 'CSS', 'JS', 'MongoDB']
// Destructuring an array 
let { a, b, c, d } = skills
console.log(a)
console.log("---------------")

console.log(skills)

//inserting
//at the start of the array
skills.unshift('Java', 'Python')
console.log("---------------")
console.log(skills)

//at the end of the array
console.log("---------------")

skills.push('C')
console.log(skills)

console.log("---------------")
//at any where or middle

skills.splice(3, 0, 'D')
console.log(skills)

// delete at start
skills.shift()
console.log(skills)
//delete at end
skills.pop()
console.log(skills)
//delete at any where 
skills.splice(3, 2)//first index and second num of values to delete
console.log(skills)

//
let marks = [90, 70, 40, 89, 56]
//filter (selection)
//get all marks less than 50
let result = marks.filter(function (element) {
    return element > 70
})
console.log(result)

//arrow function
let result1 = marks.filter(element => element > 70)

console.log(result1)


//write a function that can extract marks >70, pack them into an array
function arr(a) {
    let ar = []
    for (i of marks) {
        if (i > 70) {
            ar.push(i)
        }
    }
    return ar
}

console.log(arr(marks))

//find marks between 30 and 90
let result3 = marks.filter(element => element > 30 && element < 90)
let result4 = marks.filter(function (element) {
    return element > 30 && element < 90
})

console.log(result3)

//map (transform or modify)
let salary = [100, 200, 300]
function sal(a) {
    let v = []
    for (i of a) {
        i += 50
        v.push(i)
    }
    return v
}
console.log(sal(salary))

let resu = salary.map(function (element) {
    return element + 50
})
console.log(resu)

let resu1 = salary.map(function (element) {
    return element > 50
})

console.log(resu1)