import React, { useEffect, useState } from 'react'

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(()=> {
    fetch("http://localhost:3000/")
    .then((res) => res.text())
    .then((data) => setMessage(data));
  }, []);
  return (
    <>
      <h1>SaaS Frontend</h1>
      <p>Message from server: {message}</p>
    </>
  )
}

export default App
