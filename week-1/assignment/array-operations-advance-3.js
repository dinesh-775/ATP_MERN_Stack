/*ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
*/
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//Tasks:
console.log("---------------------------------------------------")
console.log("---------------------------------------------------")

    //1. filter() employees from IT department
        let a1 = employees.filter(ele=>ele.department==="IT")
        console.log("IT Department:",a1)
        console.log("---------------------------------------------------")

    //2. map() to add:
    //        netSalary = salary + 10% bonus
        let a2 = employees.map(ele=>{
            return{
                id:ele.id,
                name:ele.name,
                salary:ele.salary,
                department:ele.department,
                netSalary: ele.salary+(ele.salary/100)*10
            }    
        })
            console.log("Adding NetSalary:")
            console.log(a2)
            console.log("---------------------------------------------------")
            
    //3. reduce() to calculate total salary payout
        let a3 = employees.reduce((a,e)=>a+e.salary,0)
        console.log("Total Salary Payout:",a3)
        console.log("---------------------------------------------------")

    //4. find() employee with salary 30000
        let a4 = employees.find(ele=>ele.salary===30000)
        console.log("Salary is 30,000",a4)
        console.log("---------------------------------------------------")

    //5. findIndex() of employee "Neha"
        let a5 = employees.findIndex(ele=> ele.name==="Neha")
        console.log("Index:",a5)
        console.log("---------------------------------------------------")
