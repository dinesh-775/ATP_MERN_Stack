//ii. task.js - Task operations
                    // TODO: Import validator functions
                    // import { ... } from './validator.js';
import { validateDueDate, validatePriority, validateTitle } from './validator.js';                    
                    const tasks = [];
                    
                    // 1. Add new task
                    function addTask(title, priority, dueDate) {
                      // Validate using imported functions
                        let validTitle = validateTitle(title);
                        let validDueDate = validateDueDate(dueDate);
                        let validPriority = validatePriority(priority);
                        // If valid, add to tasks array
                        if(validTitle && validDueDate && validPriority){
                            if(tasks.length === 0){
                                const task = {
                                    id : 1,
                                    title : title,
                                    priority : priority,
                                    dueDate : dueDate,
                                    completed : false
                                }
                                tasks.push(task);
                                return "Success ! : task "+task.id+" added"
                            }
                            else{
                                const task = {
                                    id : tasks.length + 1,
                                    title : title,
                                    priority : priority,
                                    dueDate: dueDate,
                                    completed : false
                                }
                                tasks.push(task);
                                return "Success ! : task "+task.id+" added"
                            }// Return success/error message
                        }
                        return "Error : Invalid Data"
                      
                      
                    }
                  
                    // 2. Get all tasks
                    function getAllTasks() {
                      return tasks;
                    }
                    
                    // 3. Mark task as complete
                    function completeTask(taskId) {
                        for (let task of tasks){
                            if(task.id === taskId){
                                task.completed = true ; 
                                return "Success : "+task.title+" Task marked as complete";
                            }
                        }
                        return "Error : Task not found";
                    }
export { addTask, getAllTasks, completeTask };