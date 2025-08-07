import express from "express";
import cors from "cors";

// creates our express application 
const app = express();

// Use the cors middleware
// This tells Express to add the right headers to its responses,
// allowing our frontend to connect.
app.use(cors());

//parses incoming data coming from request(frontend)
app.use(express.json());

//defines the port we want our server to run on
const port = 3000;

// This is the core of it
// app.get tells the server to listen for a get request at the "/" path (the root URL)
// (req, res) => {...} is the handler function
// res.send(...) is what send the response back to the browser 
app.get("/", (req, res) => {
    res.send("Hello from the server");
})

app.post("/api/v1/generate-atricle", (req, res) => {
    //get the topic from the request body that the user sent
    const {topic} = req.body;

    //for now we'll just log it into the console to see if we recieved it
    console.log("Topic: ", topic);

    //send back a fake hardcoded response
    res.status(200).json({
        article: `this is a fantastic ai-generated article about ${topic}. It has many insightful paragraphs and brilliant conclusion`
    });
});


// this starts the server and makes it listen for incoming requests on our port
// the message in the console log is just for us, so we know it's running 
app.listen(port, ()=>{
    console.log(`Sever is running on http://localhost:${port}`);
})
