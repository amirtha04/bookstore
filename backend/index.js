import express, { request, response } from "express";
import { PORT , mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

//const cors = require("cors");
//const express = require("express");

const app = express();

app.use(cors()); //  Allow requests from any origin
app.use(express.json());


//const app=express();

//middleware for parsing request body
app.use(express.json());

app.get('/',(request,response)=>{
    console.log(request);
    return response.status(234).send('Welcome to my server');
});

app.use('/books', booksRoute);

//middleware for handling CORS POLICY
//Option 1: allow all origins with default of cors(*)
app.use(cors());
//Option2: allow custom origins
/*app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT' , 'DELETE'],
    allowedHeaders: ['Content-Type'],
  })
);
*/

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, ()=>{
        console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  })


