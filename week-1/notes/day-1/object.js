//Create Student object with properties rollNo,name,age and city

let student = {
    rollno: 48,
    name: 'Dinesh',
    age: 20,
    city: 'Hyderabad'
}
console.log("--------------")
for (let v in student) {

    console.log(v + ' : ' + student[v])

}
console.log("--------------")