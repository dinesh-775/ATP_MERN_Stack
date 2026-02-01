//iii. app.js - Main application
                  // TODO: Import task functions
                  import { addTask, getAllTasks, completeTask } from './task.js';
                  // Test your module system
                  // 1. Add some tasks
console.log("-----------------------------")
                    console.log("Adding Tasks:")
                    console.log(addTask("Assignment","high","2026-02-01"))
                    console.log(addTask("Grocery Shopping","medium","2026-02-01"))
                    console.log(addTask("Workout","low","2026-01-15"))
console.log("-----------------------------")

                  // 2. Display all tasks
                    console.log("All Tasks:")
                    console.log(getAllTasks())
console.log("-----------------------------")

                  // 3. Complete a task
                    console.log("Editing Task Which are complete :")
                    console.log(completeTask(1))
console.log("-----------------------------")

                  // 4. Display all tasks again
                    console.log(getAllTasks())
console.log("-----------------------------")
                 
                    

