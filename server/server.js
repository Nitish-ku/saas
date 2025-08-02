import express from "express";

// creates our express application 
const app = express();

//defines the port we want our server to run on
const port = 3000;

// This is the core of it
// app.get tells the server to listen for a get request at the "/" path (the root URL)
// (req, res) => {...} is the handler function
// res.send(...) is what send the response back to the browser 
app.get("/", (req, res) => {
    res.send("Hello from the server");
})


// this starts the server and makes it listen for incoming requests on our port
// the message in the console log is just for us, so we know it's running 
app.listen(port, ()=>{
    console.log(`Sever is running on http://localhost:${port}`);
})
