// Make API Request
fetch('https://cat-fact.herokuapp.com/facts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));    

    let student={
        id:1,
        name:"dinesh",
    }
let a=JSON.stringify(student)
console.log