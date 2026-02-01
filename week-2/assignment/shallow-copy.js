/*Hands-On 1000: Shallow Copy (Controlled Mutation Use Case)
-------------------------------------------------------
🧪 Given Data:*/
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

// Task
    //1. Create a shallow copy of user
    let shallowCopy = {...user}
    //2. Change:
          //i. name in the copied object
          shallowCopy.name="Dinesh"
          console.log("--------------------------")
          
          //ii. preferences.theme in the copied object
          shallowCopy.preferences.theme = "light"

          //iii .Log both original and copied objects
          console.log(user)
          console.log(shallowCopy)
          console.log("--------------------------")


          //iv. Observe what changes and what doesn’t
          console.log("Name was changed in copied object only!")
          console.log("But theme was changed in both original and copied object")
          console.log("--------------------------")
          console.log("--------------------------")

          








