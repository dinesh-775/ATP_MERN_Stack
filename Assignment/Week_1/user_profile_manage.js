/*
Assignment 1: User Profile Manager
----------------------------------
Scenario : You are managing a logged-in user’s profile in a web application.
*/

const user = {
    id: 101,
    name: 'Ravi',
    email: 'ravi@gmail.com',
    role: 'student',
    isActie: true
}
console.log('--------------')
//read and print name and email
console.log(user.name)
console.log(user.email)
console.log('--------------')
//add new property
user.lastLogin = "2026-01-01"
console.log(user)
console.log('--------------')
//update role from student to admin
user.role = 'admin'
console.log(user)
console.log('--------------')
//delete active property
delete user.isActie
console.log(user)
console.log('--------------')
//print or listout the keys from user
let re = Object.keys(user)
console.log("keys: " + re)
console.log('--------------')