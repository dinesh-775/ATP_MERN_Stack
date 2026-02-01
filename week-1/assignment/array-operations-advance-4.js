/*ASSIGNMENT 4: 
------------
Movie Streaming Platform

You are working on a movie recommendation system.

Test data:
*/
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


//Tasks:
    //1. filter() only "Sci-Fi" movies
        let b1 = movies.filter(ele=>ele.genre==="Sci-Fi")
        console.log("Filter:",b1)
        console.log("---------------------------------------------------")

    //2. map() to return:
            //"Inception (8.8)"
        let b2 = movies.map(ele=>{
            if(ele.title==="Inception" && ele.rating===8.8){
                return {
                    id:ele.id,
                    title:ele.title,
                    genre:ele.genre,
                    rating:ele.rating
                }
                    
            }
        })
        console.log("---------------------------------------------------")

    //3. reduce() to find average movie rating
    let b3 = employees.reduce((a,e)=>a+e.rating,0) / employees.length
    console.log("Average Rating:",b2)
    console.log("---------------------------------------------------")

    //4. find() movie "Joker"
    let b4 = employees.find(ele=>ele.title==="Joker")
    console.log("Movie:",b4)
    console.log("---------------------------------------------------")

    //5. findIndex() of "Avengers"
    let b5 = employees.findIndex(ele=>ele.title==="Avengers")
    console.log("Index:",b5)
    console.log("---------------------------------------------------")






