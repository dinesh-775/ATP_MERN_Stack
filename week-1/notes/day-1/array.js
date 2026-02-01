let marks = [98, 99, 79]
let skills = ['HTML', 'JS', 'ReactJS', 'CSS']
console.log("-----------")
console.log(skills[1])
console.log("-----------")
// Iterating
//for of loop
for (let i of marks) {
    console.log(i)
}
console.log("-----------")
//

function sumOfMarks(marks) {
    let count = 0
    for (let i of marks) {
        count += i
    }
    return count
}

result1 = sumOfMarks(marks)
console.log("sum of marks is " + result1)
console.log("-----------")


//write a function that receives marks and return small element

function smallestValue(marks) {
    small = marks[0]
    for (let v of marks) {
        if (v < small) {
            small = v
        }
    }
    return small
}

result2 = smallestValue(marks)
console.log("smallest value is " + result2)
console.log("-----------")

//write a function that receives skill sets and a skill name as args and if the skill name exist in skill set it return index other wise skill not found

function skillSearch(skills, skillname) {
    let i, count = 0, result
    for (i = 0; i < skills.length; i++) {
        if (skills[i] == skillname) {
            result = i
            count++
        }
    }
    if (count > 0) {
        return result
    }
    else {
        return "Skill not found!"
    }
}

result3 = skillSearch(skills, 'HTM')
console.log(result3)

console.log("-----------")