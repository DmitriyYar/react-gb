import style from './Message.module.css'

export const Message = (props) => {

  return <div className={style.card}>
    <h3 className={style.title}>Message component (child)</h3>
    <p className={style.text}>Parent text (props):</p>
    <p className={style.text1}>{props.data}</p>
  </div>
}