/*ASSIGNMENT 5: 
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

