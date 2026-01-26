//Test Data:
const cart = [
    { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
    { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
    { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
    { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//Task:

//Use filter() to get only inStock products
let r1 = cart.filter(ele => ele.inStock === true)
console.log(r1)

//Use map() to create a new array with: { name, totalPrice }
let r2=cart.map(ele=>ele.name)
//Use reduce() to calculate grand total cart value
//Use find() to get details of "Mouse"
//Use findIndex() to find the position of "Keyboard"