/*Assignment 1: Date Creation & Extraction (Beginner)
---------------------------------------------------
Tasks:
       1. Create a Date object for current date & time.   */
       let currentDate = new Date();

//      2. Extract and display:
    let months = [ "January", "February", "March", "April", 
        "May", "June","July", "August", 
        "September", "October", "November", "December" ];

    let days = ["Sunday", "Monday", "Tuesday",
         "Wednesday","Thursday", "Friday", "Saturday"];

                    //* Year
                    let year = currentDate.getFullYear();
                    //* Month (human readable)
                    let month = months[currentDate.getMonth()]
                    //* Date
                    let date = currentDate.getDate()
                    //* Day of week
                    let day = days[currentDate.getDay()]
                    //* Hours, minutes, seconds
                    let hours = currentDate.getHours();
                    let minutes = currentDate.getMinutes();
                    let seconds = currentDate.getSeconds();
//  Display
    console.log("Year:",year)
    console.log("Month:",month)
    console.log("Date:",date)
    console.log("Day:",day)
    console.log("Hour:",hours)
    console.log("Minute:",minutes)
    console.log("seconds:",seconds)
  console.log('---------------------------------')

//      3. Display the date in this format:
                  //  DD-MM-YYYY HH:mm:ss
        function addIfZero(num){
            return num.toString().padStart(2, "0");
        }
        let format = addIfZero(date)+"-"+
                     addIfZero(currentDate.getMonth()+1)+"-"+
                     year+" "+
                     addIfZero(hours)+":"+
                     addIfZero(minutes)+":"+
                     addIfZero(seconds)
        console.log("DD-MM-YYYY HH:mm:ss  :",format)
  console.log('---------------------------------')



/*
Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
--------------------------------------------------------------------

 Given:
 */
      let enrollmentDeadline = new Date("2026-01-20");

//Tasks:
        
  //1.Check if:
    //  * Today is before deadline → "Enrollment Open"
    //  * Today is after deadline → "Enrollment Closed"
    let today = new Date();
    console.log('Current Date:',today.getDate() +"-"+ (today.getMonth()+1) +"-"+ today.getFullYear());
    console.log('Enrollment Deadline:',enrollmentDeadline.getDate() +"-"+ (enrollmentDeadline.getMonth()+1) +"-"+ enrollmentDeadline.getFullYear());
   if(today < enrollmentDeadline){
        console.log("Enrollment Open")
    }
    else{
        console.log("Enrollment Closed")
    }
      console.log('---------------------------------')


  //2. Validate user input date:
    //  * Input: "2026-02-30"
    let input = "2026-02-30";
    // * Function to validate date
    validatingDate = function(input){
        let [year, month, day] = input.split("-").map(Number);
        let dateValidate = new Date(year, month - 1, day);
        if(
            dateValidate.getFullYear() === year &&
            dateValidate.getMonth() === month - 1 &&
            dateValidate.getDate() === day){
                return true;
        }
        else{
            return false;   
        }
    }
    //  * Detect whether the date is valid or invalid
    if(validatingDate(input)===true){
        console.log(input,"is Valid Date");
    }
    else{
        console.log(input,"is Invalid Date");
    }
  console.log('---------------------------------')

/*Assignment 3: Age Calculator (Intermediate)
-------------------------------------------
Input:
*/
    let dob = "2005-07-08";


//Tasks:
    //    1. Calculate exact age in years
    
   
    function calAge(dat){
        let date1 = new Date()
        let date2 = new Date(dat)
        let age = date1.getFullYear()-date2.getFullYear()
        let months = (date1.getMonth()+1)-(date2.getMonth()-1)
        if(months < 0 || months === 0 && date1.getDate < date2.getDate  ){
            return age--;
        }
        else{
            return age;
        }
    }
    console.log("Age:",calAge(dob))
    console.log('---------------------------------')
