/*
HANDS-ON 3: Enrollment Eligibility Checker
------------------------------------------
Initial data:
*/
    let hasPaid = true;
    let hasCompletedBasics = false;

//Tasks:
    //1. If both conditions are true → "Enroll Now"
    //2. Otherwise → "Complete Requirements"
    //3. Use ternary operator
    //4. Store result in enrollMessage
    //5. Print message
    

    enrollMessage = function(){
        hasCompletedBasics === true && hasPaid ===true ? console.log("Enroll Now"):
        console.log("Complete Requirement")
    }
    console.log("HANDS-ON 3: Enrollment Eligibility Checker")
    enrollMessage();
    console.log("------------------------")
