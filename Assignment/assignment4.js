/*Assignment 1: Date Creation & Extraction (Beginner)
---------------------------------------------------
Tasks:
       1. Create a Date object for current date & time.    */
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
/*
output:

Year: 2026
Month: January
Date: 26
Day: Monday
Hour: 14
Minute: 59
seconds: 54
DD-MM-YYYY HH:mm:ss  : 26-01-2026 14:59:54

*/