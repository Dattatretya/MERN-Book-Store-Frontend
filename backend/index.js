import  express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import bookRoutes from "./routes/bookRoutes.js";
import cors from "cors"

const app = express()

app.use(bodyParser.json())

// app.use(cors())

app.use(cors({
    origin:"http://localhost:3000",
    methods:["GET", "PUT", "POST", "DELETE"],
    allowedHeaders:["Content-Type"]
}))


app.use("/books", bookRoutes)

const PORT = 3000;
const mongoDBURL = 'mongodb+srv://root:root@book-store-mern.efyegpp.mongodb.net/books-collection?retryWrites=true&w=majority'


app.get("/",(req, res)=>{
    return res.status(200).send("Please use '/books' with the url to get the desired output")
})





mongoose.connect(mongoDBURL).then(()=>{
    console.log("app connected to db")
    app.listen(PORT, ()=>{
        console.log(`listening to port ${PORT}`)
    })
    
})
.catch((error)=>{
    console.log(error)
})