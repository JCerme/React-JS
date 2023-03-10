import React from 'react';
import ListWish from './ListWish/ListWish.js';
import InputWish from './InputWish/InputWish.js';
import { useState } from 'react';

const initWishes = [
  {text: 'Deseo 1', done: true},
  {text: 'Deseo 2', done: false},
  {text: 'Deseo 3', done: false},
];

function App() {
  const [wishes, setWishes] = useState(initWishes);
  return (
    <div className="main">
      <InputWish onNewWish={wish => setWishes([...wishes, wish])}/>
      <ListWish wishes={wishes}/>
    </div>
  );
}

export default App;
