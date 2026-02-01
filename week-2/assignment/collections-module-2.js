/*Project story:
-------------
“We are building the data engine of an online learning platform(like Udemy / Coursera / company LMS).Frontend and backend will later consume THIS logic.”

Data setup:
-----------
*/

const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

//MODULE 2: COURSE CATALOG ENGIN
console.log("MODULE 2: COURSE CATALOG ENGINE")
  //-> Get published courses  
    let publishedCourses = courses.filter(ele=>ele.published === true)
    console.log(publishedCourses)
    console.log("------------------------------")

  //-> Sort courses by price (high → low)
    let sortedCourses = courses.sort((a,e)=>e.price - a.price)
    console.log(sortedCourses)
    console.log("------------------------------")

  //-> Extract { title, price } only
    let courseDetails = courses.map(ele=>{
        return {title:ele.title, price:ele.price}
    })
    console.log(courseDetails)
    console.log("------------------------------")

  //-> Calculate total value of published courses
    let totalValue = publishedCourses.reduce((acc,ele)=>{
        return acc + ele.price
    },0)
    console.log(totalValue) 
    console.log("------------------------------")

  //-> Add a new course immutably       
    let newCourse = {id:104, title:"Angular", price:1399, published:true}
    let updatedCourses = [...courses, newCourse]
    console.log(updatedCourses)
    console.log("------------------------------")

