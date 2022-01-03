import React, {useState} from 'react';
import Checker from './Checker.js';
import Header from './Components/Header/Header.jsx';


function App() {
  const [likes, setLikes] = useState(0);

  function increment() {
    setLikes(likes + 1);
  }

  function decrement() {
    setLikes(likes - 1);
  }

  return (
    <div className="App">
      <Header />
      <h1>{likes}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <Checker />
    </div>
  );
}

export default App;
