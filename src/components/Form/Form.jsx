import style from './Form.module.css';
import { useState, useEffect } from 'react';

export const Form = ({ arr, hendelChangeMessageList }) => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [quantity, setQuantity] = useState(null);

  const handleClick = () => {
    if (author !== '' && text !== '') {
      setIsTyping(false);

      hendelChangeMessageList([
        ...arr,
        {
          text: text,
          author: author,
        },
      ]);
    } else {
      console.log('Заполните поля');
    }
  };

  const authorChange = (event) => {
    setIsTyping(true);
    setAuthor(event.target.value);
  };

  const textChange = (event) => {
    setText(event.target.value);
  };

  const handleClickInfo = () => {
    let user = arr.find((element) => element.author === author);
    let counter = 0;
    if (user) {
      arr.forEach((element) => {
        if (author === element.author) {
          counter = counter + 1;
        }
      });
    }
    setQuantity(counter);
  };

  useEffect(() => {
    // пропускаем событие во время набора имени автора
    if (isTyping) {
      return;
    }
    setTimeout(() => {
      console.log('Статья опубликована. Автор:  ' + author);
    }, 1500);
  }, [author, isTyping]);

  return (
    <div className={style.card}>
      <h3 className={style.title}>App component (parent)</h3>
      <p className={style.title}>Автор:</p>
      <input
        className={style.field}
        type="text"
        onChange={authorChange}
        placeholder="Автор"
      ></input>
      <p className={style.title}>Текст:</p>
      <input
        className={style.field}
        type="text"
        onChange={textChange}
        placeholder="Статья"
      ></input>
      <button className={style.btn} onClick={handleClick}>
        Send
      </button>
      <div className={style.info}>
        <p>Автор: {author}</p>
        <p className={style.infoBox}>
          Опубликовал статей: {quantity}{' '}
          <button className={style.btn} onClick={handleClickInfo}>
            Info
          </button>
        </p>
      </div>
    </div>
  );
};
