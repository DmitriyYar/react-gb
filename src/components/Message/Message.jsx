import style from './Message.module.css';

export const Message = (props) => (
  <div className={style.card}>
    <h3 className={style.title}>Message component (child)</h3>
    <p className={style.text}>Колличество статей в библиотеке:</p>
    <p className={style.text1}>{props.data}</p>
  </div>
);
