import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [quotes, setQuotes] = useState([])
  const [quote, setQuote] = useState({})

  const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
  const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ]

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (res.ok) return res.json()
        else return Promise.reject(res)
      })
      .then(({quotes}) => {
        setQuotes(quotes)
        setQuote(quotes[Math.floor(Math.random() * quotes.length)])
      })
      .catch(err => {
      console.log(err)
      })
  }, [])

  const getQuote = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }

  const randomBg = () => {
    return {
      "background-color": colors[Math.floor(Math.random() * colors.length)]
    }
  }

  return (
    <div id="quote-box" className="box" style={randomBg()}>
      <div id="text">
        <h3>{quote.quote}</h3>
      </div>
      <div id="author">
        <h4>{quote.author}</h4>
      </div>
      <button id="new-quote" className="btn btn-primary" onClick={getQuote}>New Quote</button>
      <a className="btn" id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank">Tweet</a>
    </div>
  );
}

export default App;
