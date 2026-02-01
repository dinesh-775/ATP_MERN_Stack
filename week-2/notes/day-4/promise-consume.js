// Creating a Promise Object
let futureavailability = true;
let promiseObj = new Promise((fullfill, reject) => {
    setTimeout(() => {
        if (futureavailability == true) {
            fullfill("Hello friend, How are you?\n");
        }
        else {
            reject("Sorry I will call you later\n");
        }
    }, 5000);
});
// Consuming a Promise Object

promiseObj
    .then((message) => console.log("\nFullfilled :", message))// if promise is fullfilled
    .catch((error) => console.log("\nRejected : ", error));// if promise is rejected


//
let firstRank = true;
promiseRank = new Promise((fullfill, reject) => {
    if (firstRank == true) {
        fullfill("I got First Rank Dad!");
    }
    else {
        reject("I didn't got First Rank!");
    }
});


promiseRank
    .then((message) => console.log("\nFull Filled : ", message))
    .catch((error) => console.log("\nRejected : ", error));

