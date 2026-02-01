/*Hands-On 2: Deep Copy (Isolation & Safety Use Case)
---------------------------------------------------

🧪 Given Data:*/
                const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };

//Task:
      //1. Create a deep copy of order
      const deepCopy = structuredClone(order)
      //2. Modify in copied object:
            // i. customer.address.city
            deepCopy.customer.address.city = "Bengaluru"
            console.log("--------------------------")
            //ii. items[0].price
            deepCopy.items[0].price = 50000
            console.log("--------------------------")
            //iii. Verify original object remains unchanged
            console.log(order)
            console.log(deepCopy)
            console.log("Verified !")
            console.log("--------------------------")
            console.log("--------------------------")