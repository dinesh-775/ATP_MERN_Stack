/*Project story:
-------------
“We are building the data engine of an online learning platform(like Udemy / Coursera / company LMS).Frontend and backend will later consume THIS logic.”

Data setup:
-----------
*/
const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];
console.log("------------------------------")

//TASKS
//------
//MODULE-1 :USER PROCESSING ENGINE
console.log("MODULE 1: USER PROCESSING ENGINE") 
  //-> Get only active users
  let activeUser = users.filter(ele=>ele.active === true)
  console.log(activeUser)
  console.log("------------------------------")
   
  //-> Extract names of active users
  let names = activeUser.map(ele=>{
        return ele.name
    })
    console.log(names)
    console.log("------------------------------")

  //-> Check if any admin exists
  let admins = users.filter(ele=>{
    return ele.role==="admin"
  })
  console.log(admins)
  console.log("------------------------------")

  //-> Find user by id
    let userById = users.find(ele=>{
        return ele.id===2
    })
    console.log(userById)
    console.log("------------------------------")

  //-> Deactivate a user immutably
    let deactivateUser = users.map(ele=>{
        if(ele.id===3){
            return {...ele, active:false}
        }   
        return ele
    })
    console.log(deactivateUser)
    console.log("------------------------------")


