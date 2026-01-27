//Assignment 1: Daily Temperature Analyzer
//----------------------------------------
//Scenario : You are analyzing daily temperatures recorded by a weather app.
const temperatures = [32, 35, 28, 40, 38, 30, 42];
//task
console.log('--------------')

//1. filter() temperatures above 35

let r1 = temperatures.filter(element => element > 35)
console.log("Temperatuer above 35: " + r1)
console.log('--------------')

//2. map() to convert all temperatures from Celsius → Fahrenheit
let r2 = temperatures.map(ele => (ele * 9 / 5) + 32)
console.log("celsius to fahrenheit: " + r2)
console.log('--------------')

//3. reduce() to calculate average temperature
let r3 = temperatures.reduce((a, e) => a + e)
console.log("Average Temperatuer: " + r3 / temperatures.length)
console.log('--------------')

//4. find() first temperature above 40
let r4 = temperatures.find(ele => ele > 40)
console.log("Finding Temprature above 40:" + r4)
console.log('--------------')

//5. findIndex() of temperature 28
let r5 = temperatures.findIndex(ele => ele === 28)
console.log("Index of 28: " + r5)
console.log('--------------')
console.log('--------------')
console.log('--------------')







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
    console.log('--------------')

















/*


Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
*/
const marks = [78, 92, 35, 88, 40, 67];

//Tasks:
    //1. filter() marks ≥ 40 (pass marks)
        a1 = marks.filter(ele=> ele >= 40)
        console.log("Marks>= 40:",a1)
        console.log('--------------')  

    //2. map() to add 5 grace marks to each student
        a2 = marks.map(ele=>{
            return ele+5
        })
        console.log("Add 5 Grace Marks:",a2)
        console.log('--------------')
    
    //3. reduce() to find highest mark
        a3 = marks.reduce((a,e)=>a>e?a:e)
        console.log("Higest Mark:",a3)
        console.log('--------------')

    //4. find() first mark below 40
        a4 = marks.find(ele =>ele<40 )
        console.log("First Mark Below 40:",a4)
        console.log('--------------')

    //5. findIndex() of mark 92
        a5 = marks.findIndex(ele => ele === 92)
        console.log("Index of 92:",a5)
        console.log('--------------')

