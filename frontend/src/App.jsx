import React from 'react'
import { useState } from 'react'

const App = () => {
  // state for the user's input topic
  const [topic, setTopic] = useState("");
  
  // state to store the article we get from the server
  const [article, setArticle] = useState("");

  // state to show a loading message
  const [loading, setLoading] = useState(false);

  // this function is called when the form is submitted
  const handleGenerateArticle = (e) => {
    //prevents the browser from reading the page, which is the default form behaviour 
    e.preventDefault();

    // show a loading message
    setLoading(true);

    // clear any previous article
    setArticle("");

    // the core API call
    fetch("http://localhost:3000/api/vi/generate-article", {
      method: "POST", // we are sending data so we use POST
      header:{
        "content-type": "application/json", // we're sending data in JSON format
      },

      // the actual data we're sending, converted to a JSON string
      body: JSON.stringify({topic:topic}),
    })
    .then((res) => res.json()) // the server sends json back so we use .json()
    .then((data)=>{
      // hide the loading message
      setLoading(false);
      //update our state with the article from the server's response
      setArticle(data.article);
    })
    .catch(err =>{
      setLoading(false);
      console.error(err); // log any error to the console
    }); 
  };

  return (
    <div style={{padding:'20px', fontFamily:'Arial, sans-serif'}}>
      <h1> AI Article Generator</h1>
      <p>
        Enter a topic and we'll use the power of AI to write for you
      </p>
      {/* We use a <form> element to handle the submission */}

      <form onSubmit={handleGenerateArticle}>
        <input
          type='text'
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder='e.g., The future of Renewable energy'
          style={{padding:'10px', width:'300px', marginRight:'10px'}}
          />
          <button type='submit' disabled={loading} style={{padding:'10px'}}>
            {loading ? 'Generating...' : 'Generate Article'}
          </button>
      </form>

      {/* Display the generated article here */}
      {article && (
        <div style={{marginTop:'20px', padding:'15px',
          border:'1px solid #ccc', backgroundColor:'#f9f9f9'
        }}>
          <h2> Generate Article </h2>
          <p> {article} </p>
          </div>
      )}
    </div>
  )
}

export default App
