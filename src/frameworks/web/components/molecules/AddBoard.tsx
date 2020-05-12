import * as React from "react";
import { useState } from 'react';
import LongBtn from '../atoms/LongBtn';
import Input from '../atoms/Input';

interface IProps {
  insertFnc(author: string, content: string): void;
}

const BoardList: React.FC<IProps> = (props) => {
  const { insertFnc } = props;
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (event.target.name === 'author') {
      setAuthor(value);
    }
    if (event.target.name === 'content') {
      setContent(value);
    }
  };

  const handleClickInsertBoard = () => {
    setAuthor('');
    setContent('');
    insertFnc(author, content);
  };

  const handleKeyDownInsertBoard = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13) {
      handleClickInsertBoard();
    }
  }

  return (
    <section className={"add-board"}>
      <div className={"add-board-btn-area"}>
        <div className={"author-box"}>
          <Input type="text" name="author" placeholder="author" onChange={handleChangeInput} onKeyDown={null} value={author} />
        </div>
        <div className={"content-box"}>
          <Input type="text" name="content" placeholder="content" onChange={handleChangeInput} onKeyDown={handleKeyDownInsertBoard} value={content} />
        </div>
        <div className={"add-btn"}>
          <LongBtn type="button" value="Add" onClick={handleClickInsertBoard} />
        </div>
      </div>
    </section>
  );
};

export default BoardList;