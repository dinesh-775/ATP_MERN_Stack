//Create HTTP Server
    // Import express module
            
        import exp, { application } from 'express' 
        import {userApp} from './API/user-api.js' 
        import { productApp } from './API/product-api.js'   
    //    
        const app = exp()

        app.listen(3000,()=>console.log('HTTP Server Running on 3000 port'))

        app.use(exp.json());
        

      /*  function middleware1(req,res,next){
            console.log("Middleware1")
            next();
        }*/

//MIDDLE WARES Which check security before request goes to api
     //   app.use(middleware1);

     app.use('/user-api',userApp)
     app.use('/products-api',productApp)



