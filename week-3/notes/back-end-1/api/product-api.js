// Product API
   import exp from "express"
   export const productApp = exp.Router()
        // Products array to store product 
        const products = []
// It
        productApp.get("/products",(req, res)=>{
            res.status(200).json({message:"Products:",payload:products})
        })

        productApp.post("/products",(req, res)=>{
            let product = req.body;
            products.push(product);
            res.status(200).json({message: "Product Created !"})

        })

        productApp.put("/products",(req , res)=>{
            let productUp = req.body;
            let productId = Number(productUp.id)
            let product = products.splice(productId,1,productUp)
            if(!product){
                return res.status(404).json({message: "Product not found !"})
            }
            res.status(200).json({message: "Product updated:",payload:product})
        })

        productApp.get("/products/:id",(req,res)=>{
            let id = Number(req.params.id)
            let obj = products.map(ele=>{
                if(ele.id === Number(id)){
                    return ele;
                }
            })
            if(!obj){
                return res.status(404).json({message:"User Not Found !",payload:obj})
            }
            res.status(200).json({message:"User found !",payload:obj});
        })

