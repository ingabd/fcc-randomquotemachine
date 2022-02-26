import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [quotes, setQuotes] = useState([])

  const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (res.ok) return res.json()
        else return Promise.reject(res)
      })
      .then(({quotes}) => {
        setQuotes(quotes)
      })
      .catch(err => {
      console.log(err)
      })
  }, [])

  const getQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)]
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h3>{JSON.stringify(getQuote())}</h3>
    </div>
  );
}

export default App;
