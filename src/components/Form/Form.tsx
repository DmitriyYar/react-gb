import * as React from 'react';
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { AUTHOR } from 'src/types';
import { Theme } from '../Theme/Theme';
import { addMessage } from 'src/store/messages/actions';
import style from './Form.module.css';

const MyButton = styled(Button)({
  width: 80,
});

export const Form: FC = () => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const { chatId } = useParams();
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (chatId) {
      dispatch(
        addMessage(chatId, {
          author: AUTHOR.USER,
          text,
        })
      );
    }
    setText('');
  };

  return (
    <>
      <form className={style.card} onSubmit={handleSubmit} role="my-form">
        <h3 className={style.title}>Форма отправки</h3>
        <input
          className={style.field}
          type="text"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          placeholder="автор"
          disabled
        ></input>
        <TextField
          value={text}
          onChange={(event) => setText(event.target.value)}
          inputProps={{ 'data-testid': 'input' }}
          size="small"
        />
        <MyButton
          type="submit"
          variant="contained"
          size="small"
          disabled={!text}
          data-testid="button"
        >
          Send
        </MyButton>
      </form>
      <Theme />
    </>
  );
};
