// this function contains the logic for generating article
// we export it so we can use it in our routes file 

export const generateArticleController = (req, res) => {

    // get the topic from the request body
    const {topic} = req.body;

    // log it to the console to see if we recieved it 
    console.log("Topic recieved in controller: ", topic);

    // check if the topic is empty
    if (!topic){
        res.status(400).json({error: "Topic is required"});
    }

    // send back our fake harcoded response 
    res.status(200).json({
        article: `this is a fantastic ai-generated article about ${topic}. It has many insightful paragraphs and brilliant conclusion`
    });
};
