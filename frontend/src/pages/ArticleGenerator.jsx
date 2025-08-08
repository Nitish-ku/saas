import { useState } from 'react';

// We can name this component anything we want.
// Since it represents the page for this feature, ArticleGenerator is a good name.
function ArticleGenerator() {
  const [topic, setTopic] = useState("");
  const [article, setArticle] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerateArticle = (e) => {
    e.preventDefault();
    setLoading(true);
    setArticle("");

    fetch("http://localhost:3000/api/v1/generate-article", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ topic: topic }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setArticle(data.article);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>AI Article Generator</h1>
      <p>
        Enter a topic, and we'll use the power of AI to write an article for you.
      </p>

      <form onSubmit={handleGenerateArticle}>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="e.g., The Future of Renewable Energy"
          style={{ padding: '10px', width: '300px', marginRight: '10px' }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{ padding: '10px' }}
        >
          {loading ? 'Generating...' : 'Generate Article'}
        </button>
      </form>

      {article && (
        <div
          style={{
            marginTop: '20px',
            padding: '15px',
            border: '1px solid #ccc',
            backgroundColor: '#f9f9f9'
          }}
        >
          <h2>Generated Article</h2>
          <p>{article}</p>
        </div>
      )}
    </div>
  );
}

export default ArticleGenerator;
