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

