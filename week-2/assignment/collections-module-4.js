/*Project story:
-------------
“We are building the data engine of an online learning platform(like Udemy / Coursera / company LMS).Frontend and backend will later consume THIS logic.”

Data setup:
-----------
*/

const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};

//MODULE 4: ROLE & PERMISSION ENGINE
console.log("MODULE 4: ROLE & PERMISSION ENGINE")
  //-> Get all role names
    let roleNames = Object.keys(roles)
    console.log(roleNames)
    console.log("------------------------------")

  //-> Check if student can delete
    let canStudentDelete = roles.student.includes("delete")
    console.log(canStudentDelete)
    console.log("------------------------------")
    
  //-> Create a flat list of all unique permissions
    let allPermissions = new Set()
    Object.values(roles).forEach(permissionList=>{
        permissionList.forEach(permission=>{    
            allPermissions.add(permission)
        })
    })
    console.log(Array.from(allPermissions))
    console.log("------------------------------")   

  //-> Add new role moderator immutably*/
    let newRole = {...roles, moderator:["update","view"]}
    console.log(newRole)
    console.log("------------------------------")