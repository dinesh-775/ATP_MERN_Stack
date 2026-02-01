// Creating mini Express seperate router

import exp from 'express'
export const userApp = exp.Router();

// User API
let users = []
        
        


        userApp.get("/users",(req,res)=>{
            res.status(200).json({message: "all users", payload:users});
        })

        userApp.post("/users",(req,res)=>{
            let newUser = req.body;
            users.push(newUser);
            res.status(201).json({message: "User Created ! "});
        })

        userApp.put("/users",(req,res)=>{
            let modifiedUser = req.body;
            let userIndex = users.findIndex((user)=>user.id === modifiedUser.id);
            if(userIndex === -1){
                return res.status(404).json({message: "user not found"});
            }
            let previousUser = users.splice(userIndex,1,modifiedUser);
            res.status(200).json({message: "user Modified !",payload: modifiedUser});
        })


        userApp.get("/users/:id",(req, res)=>{
            let userId = Number(req.params.id);
            let user = users.find(user1=> user1.id === Number(userId));
            if(!user){
                return res.status(404).json({message: "User Not Found"});
            
            }
            res.status(200).json({message: "User",payload: user});
        })

        userApp.delete("/users/:id",( req, res )=>{
            let userId = Number(req.params.id)
            let user =users.find(userobj=> userobj.id === userId)
            console.log(userId)
            if(!user){
                return res.status(404).json({message: "User Not Found!"})
            }
            let deletedUser = users.splice(userId,1)
            res.status(200).json({message: "User Deleted!",payload:deletedUser})
        })