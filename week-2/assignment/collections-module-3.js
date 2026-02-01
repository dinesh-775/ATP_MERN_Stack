/*Project story:
-------------
“We are building the data engine of an online learning platform(like Udemy / Coursera / company LMS).Frontend and backend will later consume THIS logic.”

Data setup:
-----------
*/

const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

//MODULE 3: SHOPPING CART ENGINE 
console.log("MODULE 3: SHOPPING CART ENGINE")
  //-> Merge cart with courses to get full course info
    let mergedCart = cart.map(cartItem=>{
        let courseInfo = courses.find(course=> course.id === cartItem.courseId)
        return {...cartItem, title: courseInfo.title, price: courseInfo.price}
    })
    console.log(mergedCart)
    console.log("------------------------------")

  //-> Calculate total cart amount
    let totalCartAmount = mergedCart.reduce((acc,ele)=>{
        return acc + (ele.price * ele.qty)
    },0)
    console.log(totalCartAmount)
    console.log("------------------------------")

  //-> Increase quantity of a course (immutably)
    let increasedQtyCart = mergedCart.map(ele=>{
        if(ele.courseId === 101){
            return {...ele, qty: ele.qty + 1}
        }
        return ele
    })
    console.log(increasedQtyCart)   
    console.log("------------------------------")

  //-> Remove a course from cart
    let removedCourseCart = mergedCart.filter(ele=> ele.courseId !== 103)
    console.log(removedCourseCart)
    console.log("------------------------------")

  //-> Check if all cart items are paid courses
    let allPaid = mergedCart.every(ele=> ele.price > 0)
    console.log(allPaid)  
    console.log("------------------------------")  


