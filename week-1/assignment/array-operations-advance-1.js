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
    console.log("---------------------------------------------------");



    