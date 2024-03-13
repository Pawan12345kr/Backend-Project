// require('dotenv').config({path: './env'})
import dotenv from 'dotenv'
import connectDB from "./db/index.js"

import 'dotenv/config' // mohit has done it for me
// console.log("INDEX",process.env.MONGODB_URI)

connectDB()












/*
import express from "express";

const app = express()
(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)  
        app.on("error", (error)=>{
            console.error("ERROR: ", error)
            throw error
        }) 

        app.listen(process.env.PORT,()=>{
            console.log(`listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()*/
