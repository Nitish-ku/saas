import express from "express";
import { generateArticleController } from "../controllers/controller";


// create a new router object from express
const router = express.Router();

// define our route 
// when a post request is made to "/", this route will call our controller function 
// note: the full path will be "/api/v1/generate-article" because we will mount this router there in server.js
router.post("/", generateArticleController);

// exort the router so we can use it in our server.js file 
export default router;
