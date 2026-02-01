/*ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
*/
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
    console.log("---------------------------------------------------")

//Tasks:
    //1. filter() students who passed (marks ≥ 40)
    console.log("---------------------------------------------------")
    let r1 = students.filter(ele=>ele.marks>=40)
    console.log("Passed:",r1)
    console.log("---------------------------------------------------")

    //2. map() to add a grade field
    let r2 = students.map(ele=>{
        return{
            id:ele.id,
            name:ele.name,
            marks:ele.marks,
            grade:
            ele.marks>=90 ? "A" :
            ele.marks>=75 ? "B" :
            ele.marks>=60 ? "C" : "D"
        }
    })
    console.log("Grade Added:",r2)
    console.log("---------------------------------------------------")


   //3. reduce() to calculate average marks
   let r3 = students.reduce((a,e)=>a+e.marks,0)/students.length
   console.log("Average:",r3)
   console.log("---------------------------------------------------")

   //4. find() the student who scored 92
   let r4 = students.find(ele=>ele.marks===92)
   console.log("Founded:",r4)
   console.log("---------------------------------------------------")

   //5. findIndex() of student "Kiran"
   let r5 = students.findIndex(ele=>ele.name==="Kiran")
   console.log("Index:",r5)
   console.log("---------------------------------------------------")





