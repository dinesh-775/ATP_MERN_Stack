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
console.log('--------------')

//Assignment 2: Exam Result Summary

//Scenario : Marks are stored subject-wise for a student.

//Test data:
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

//Tasks:
  //  1. Calculate total marks
  let total_marks = Object.values(marks).reduce((acc , ele) => acc + ele,0);
  console.log("Total marks :",total_marks)
  console.log('--------------')
  
  //  2. Calculate average marks
  let average_marks = Object.values(marks).reduce((acc, ele) => (acc + ele)/Object.values(marks).length)
  console.log("Average of marks :",average_marks)
  console.log('--------------')

  //  3. Find the highest scoring subject
  let highest_sub = Object.entries(marks).reduce((acc,[key , valu]) =>{
     (valu > acc) ? {key,valu} : {key,acc} },
     );
  console.log("Highest ",highest_sub);
  console.log('--------------')

  //  4. Add a new subject computer: 90
  marks.computer = 90;
  console.log(marks)
  console.log('--------------')
  console.log('--------------')


//Assignment 3: Application Settings Controller

//Scenario : A web app stores user preferences as settings.

//Test data:
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};

//Tasks :
  //  1.Toggle theme between "light" and "dark"
    settings.theme = (settings.theme === "light") ? "dark" : "light";
    console.log("After toggling theme :",settings);
    console.log('--------------')

  //  2. Turn autoSave to true
    settings.autoSave = "true";
    console.log("After updating autoSave :",settings);
    console.log('--------------')

  //  3. Remove the notifications setting
    delete settings.notifications;
    console.log("After removing notifications :",settings);
    console.log('--------------')

  //  4. Freeze the settings object so it cannot be modified
    Object.freeze(settings);
    console.log("After freezing the settings object :",settings);
    console.log('--------------')

  //  5. Attempt to change language to "fr" and print the settings object to verify it didn't change
    settings.language = "fr";
    console.log("After attempting to change language to fr :",settings);
    console.log('--------------')