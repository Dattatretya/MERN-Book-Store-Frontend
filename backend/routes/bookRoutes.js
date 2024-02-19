import express from "express"
import { Book } from "../models/bookModel.js"

const router = express.Router()


router.post('/', async (req, res)=>{
    try{
        if (
            !req.body.title || !req.body.author ||
            !req.body.publishYear
        ){
            res.status(400).send({message: "send all required fields"})
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        }
        
        const book = await Book.create(newBook)
        res.status(201).send(book)
    }
    catch(error){
        console.log(error.message)
        res.status(500).send({message:error.message})
    }
})


router.get("/", async (req, res)=>{
try{
    const books = await Book.find({})
    res.status(200).send({
        count:books.length,
        data:books
    })
}
catch (error){
    console.log(error.message)
    res.status(500).send({message:error.message})
}
})


router.get("/:id", async (req, res)=>{
    try{
        const books = await Book.findById(req.params.id)
        res.status(200).send({
            count:books.length,
            data:books
        })
    }
    catch (error){
        console.log(error.message)
        res.status(500).send({message:error.message})
    }
    })


    router.put("/:id",async (req, res)=>{
        try{
            if (
                !req.body.title || !req.body.author ||
                !req.body.publishYear
            ){
                res.status(400).send({message: "send all required fields"})
            }

            const result = await Book.findByIdAndUpdate(req.params.id, req.body)

            if (!result){
                res.status(404).send("Book not found")
            }
            res.status(200).send({message:"Update Successful."})
        }
        catch(error){
            console.log(error.message)
            res.status(500).send({message:error.message})
        }
    })


    router.delete("/:id", async(req, res)=>{
        try{
            const result = await Book.findByIdAndDelete(req.params.id)

            if (!result){
                res.status(404).send("Book not found")
            }

            res.status(200).send("Deleted successfully")

        }
        catch(error){
            console.log(error.message)
            res.status(500).send({message:error.message})
        }
    })
    
    export default router