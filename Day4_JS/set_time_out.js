// unblockin and blocking statement
console.log("Start");
for (let i = 10; i < 10000000000; i++) { }//blocking
console.log("End")

// 3 members ordered food
// person 1 ordered biryani(5sec)
console.log("person 1 ordered biryani")//Non blocking sync
setTimeout(() => {
    console.log("Person 1 received Biryani")//blocking Async
}, 5000);
// person 2 ordered curd rise (2sec)
console.log("person 2 ordered curd rise")//Non blocking sync
setTimeout(() => {
    console.log("Person 2 received curd rise")//blocking Async
}, 2000);
// person 3 ordered water bottle (1sec)
console.log("person 3 ordered water bottle")//Non blocking sync
setTimeout(() => {
    console.log("Person 3 received Water Bottle")//blocking Async
}, 1000);

// setInterval example
let count = 0;
setInterval(() => {
    console.log("Interval executed", count++);
}, 1000);