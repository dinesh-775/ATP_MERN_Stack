/*ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.
*/
//Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//Tasks:
    console.log("---------------------------------------------------")


    //1. Use filter() to get only inStock products
    let result1 = cart.filter((ele)=> ele.inStock===true);
    console.log("Filtering:",result1)
    console.log("---------------------------------------------------")

    //2. Use map() to create a new array with:  { name, totalPrice }
    let result2 = cart.map(ele=>{
        return {
            name:ele.name,
            totalPrice:ele.price+ele.quantity
        }
    })
    console.log("New Object:",result2)
    console.log("---------------------------------------------------")

    //3. Use reduce() to calculate grand total cart value
    let result3 = cart.reduce((a,e)=>a+e.price*e.quantity,0)
    console.log("GrandPrice:",result3)
    console.log("---------------------------------------------------")

    //4. Use find() to get details of "Mouse"
    let result4 = cart.find(ele=> ele.name==="Mouse")
    console.log("found:",result4)
    console.log("---------------------------------------------------")

    //5. Use findIndex() to find the position of "Keyboard"
    let result5 = cart.findIndex(ele=>ele.name === "Keyboard")
    console.log("Index:",result5)
    console.log("---------------------------------------------------")







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






/*
ASSIGNMENT 3:
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









/*
ASSIGNMENT 4: 
------------
Movie Streaming Platform

You are working on a movie recommendation system.

Test data:
*/
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


//Tasks:
    //1. filter() only "Sci-Fi" movies
        let b1 = movies.filter(ele=>ele.genre==="Sci-Fi")
        console.log("Filter:",b1)
        console.log("---------------------------------------------------")

    //2. map() to return:
            //"Inception (8.8)"
        let b2 = movies.map(ele=>{
            if(ele.title==="Inception" && ele.rating===8.8){
                return {
                    id:ele.id,
                    title:ele.title,
                    genre:ele.genre,
                    rating:ele.rating
                }
                    
            }
        })
        console.log("---------------------------------------------------")

    //3. reduce() to find average movie rating
    let b3 = employees.reduce((a,e)=>a+e.rating,0) / employees.length
    console.log("Average Rating:",b2)
    console.log("---------------------------------------------------")

    //4. find() movie "Joker"
    let b4 = employees.find(ele=>ele.title==="Joker")
    console.log("Movie:",b4)
    console.log("---------------------------------------------------")

    //5. findIndex() of "Avengers"
    let b5 = employees.findIndex(ele=>ele.title==="Avengers")
    console.log("Index:",b5)
    console.log("---------------------------------------------------")








/*
ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer

You are building a bank statement summary.

Test data:
*/
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


//Tasks:
    //1. filter() all credit transactions
    let z1 = transactions.filter(ele=>ele.type==="credit")
    console.log("Filter:",z1)
    console.log("---------------------------------------------------")

    //2. map() to extract only transaction amounts
    let z2 = transactions.map(ele=>{
        return ele.amount
    })
    console.log("Amount:",z2)
    console.log("---------------------------------------------------")

    //3. reduce() to calculate final account balance
    let z3 = transactions.reduce((a,e)=>e.type==="credit"?a+e.amount:a-e.amount,0)
    console.log("Account Balance:",z3)
    console.log("---------------------------------------------------")

    //4. find() the first debit transaction
    let z4 = transactions.find(ele=>ele.type==="debit")
    console.log("Find:",z4)
    console.log("---------------------------------------------------")

    //5. findIndex() of transaction with amount 10000
    let z5 = transactions.findIndex(ele=>ele.amount===10000)
    console.log("Index:",z5)
    console.log("---------------------------------------------------")

