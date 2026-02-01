
/*
Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
*/
const courses = ["javascript", "react", "node", "mongodb", "express"];


//Tasks:
    //1. filter() courses with name length > 5
    result1 = courses.filter(ele=>ele.length>5)
    console.log("Courses length above 5:",result1)
    console.log('--------------')
    //2. map() to convert course names to uppercase
    result2 = courses.map(ele=> {
        return ele.toUpperCase()
    })
    console.log("Converting to Upper Case:",result2)
    console.log('--------------')
    //3. reduce() to generate a single string:
      //        "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
    result3 = courses.reduce((a,e)=>a+e)
    console.log("Genarating Single String:",result3)
    console.log('--------------')
    //4. find() the course "react"
    result4 = courses.find(ele=>ele==="react")
    console.log("Found:",result4)
    console.log('--------------')
    //5. findIndex() of "node"
    result5 = courses.findIndex(ele=>ele==="node")
    console.log("Index of Node:",result5)
    console.log('--------------')
    console.log('--------------');
    console.log('--------------');