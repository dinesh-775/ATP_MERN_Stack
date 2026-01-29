//i. validator.js - Input validation
                      // TODO: Export these validation functions
                      
                      // 1. Validate task title (not empty, min 3 chars)
                      function validateTitle(title) {
                        if(title.length >=3){
                          return true;
                        }
                        return false;
                      }
                      
                      // 2. Validate priority (must be: low, medium, high)
                      function validatePriority(priority) {
                        const validatePriorities = ['low','medium','high'];
                        if(validatePriorities.includes(priority)){
                          return true;
                        }
                        return false;
                      }
                      
                      // 3. Validate due date (must be future date)
                      function validateDueDate(date) {
                        const dueDate = new Date(date);
                        const currentDate = new Date();
                        if(dueDate > currentDate){
                          return true;
                        }
                        return false;
                      }
 export {validateDueDate, validatePriority, validateTitle};