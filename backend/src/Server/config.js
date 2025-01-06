import express from 'express'

import cors from 'cors'



//Router 
import HomeRouter from '../Routes/HomeRoutes.js'



const app  =express()

//Middleware 
app.use(cors({
    origin: '*'
}))
/*
Purpose: Enables CORS (Cross-Origin Resource Sharing) for your application.

Explanation:

By default, browsers block requests made from one origin (e.g., http://localhost:3000) to another origin (e.g., http://localhost:3001) due to security restrictions.
CORS allows you to explicitly grant permissions to certain origins to access your server.
Example: If your frontend is running on http://localhost:3000 and your backend on http://localhost:3001, this middleware ensures the browser doesn't block the requests.
Default Behavior:

Without additional options, it enables CORS for all origins, methods, and headers. If needed, you can restrict access by configuring it (e.g., allow specific origins only).
*/

app.use(express.json())
/*
Purpose: Parses incoming requests with a JSON payload and makes it available in req.body.

Explanation:

HTTP POST/PUT requests often send data in the JSON format.
This middleware processes the JSON data and converts it into a JavaScript object.
Without this, req.body would be undefined when handling requests with JSON payloads.
*/


app.use(express.urlencoded({ extended: false }))
/*
Purpose: Parses incoming requests with URL-encoded payloads and makes it available in req.body.

Explanation:

Form submissions from HTML <form> elements are typically sent in URL-encoded format (e.g., key1=value1&key2=value2).
This middleware parses the encoded string into a JavaScript object.
Default Behavior:

It uses the querystring library to parse URL-encoded data.
To handle larger payloads or advanced features (like nested objects), you can pass options like { extended: true }, which uses the qs library instead.

*/

app.use('/' , HomeRouter)





export const startServer = (port  = process.env.PORT || 3001 ) =>{
  
    const server = app.listen(port , () => {
        console.log(`Server is running on http://localhost:${server.address().port}`);
    })


    server.on('error' , (err)=>{
        if(err.code === 'EADDRINUSE'){
            console.log(`Port ${port} is in use. Trying another port...`);
            startServer(port + 1); // Try the next port
        }else{
            console.error('Server error:' ,err)
        }   
    })
}
