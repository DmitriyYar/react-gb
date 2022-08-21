import React from 'react';
import { useState } from 'react'
import style from './App.module.css'
import { Message } from "./components/Message/Message"; 

export const App = () => {

  let textInput = React.createRef();
  const [text, setText] = useState('Начальное значение');

  const handleClick = () => {
    setText(textInput.current.value)
  }

  return (
    <div className="App">
      <div className={style.card}>
        <h3 className={style.title}>App component (parent)</h3>
        <input className={style.field} type="text" ref={textInput}></input>
        <button className={style.btn} onClick={handleClick}>Send</button>
      </div>
      <Message data={text} />
    </div>
  );
};
