/*Assignment 3: Student Marks List
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

