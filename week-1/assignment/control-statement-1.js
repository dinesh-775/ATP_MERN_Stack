//HANDS-ON 1: Smart Login Status Engine
//----------------------------------------

//Initial data:
    let isLoggedIn = true;
    let isProfileComplete = false;

//Tasks:
    //1. If user is not logged in → show "Please login"
    //2. If logged in but profile incomplete → show "Complete your profile"
    //3. If logged in and profile complete → show "Welcome back!"
    //4. Store the result in message
    //5. Print the message
    console.log("------------------------")
    let message = function (){
        if (isLoggedIn != true) {
            return "Please login"
        }
        if (isLoggedIn === true && isProfileComplete === false) {
            return "Complete your profile"
        }
        if (isLoggedIn === true && isProfileComplete === true) {
            return "Welcome back!"
        }   
    }
    console.log("HANDS-ON 1: Smart Login Status Engine")
    console.log(message())
    console.log("------------------------")