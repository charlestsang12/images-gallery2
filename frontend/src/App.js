/*import logo from './logo.svg';
import './App.css';

function App() {
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
    </div>
  );
}
*/
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

const UNSPALSH_KEY = process.env.REACT_APP_UNSPLASH_KEY

const App = () => {
  const [word,setWord] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPALSH_KEY}`)
    .then((res) =>res.json()) 
    .then((data) => {
      console.log(data);
    })
    .catch((err)=> {
      console.log(err);
    })
  }


  return (
    <div>
     <Header title="Images Gallery"/>
     <Search word={word} setWord={setWord} handleSumit={handleSearchSubmit}/>
    </div>
  );
}

export default App;

