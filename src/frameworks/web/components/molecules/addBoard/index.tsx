import * as className from 'classnames/bind';
import * as React from "react";
import { useState } from 'react';
import LongBtn from '../../atoms/longBtn';
import Input from '../../atoms/input';
import * as styles from './index.scss';

const cx = className.bind(styles);

interface Props {
  insertFnc(author: string, content: string): void;
}

const BoardList: React.FC<Props> = (props) => {
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
    insertFnc(author, content);
    setAuthor('');
    setContent('');
  };

  const handleKeyDownInsertBoard = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13) {
      handleClickInsertBoard();
    }
  }

  return (
    <section className={cx("add-board")}>
      <div className={cx("add-board-btn-area")}>
        <div className={cx("author-box")}>
          <Input type="text" name="author" placeholder="author" onChange={handleChangeInput} onKeyDown={null} />
        </div>
        <div className={cx("content-box")}>
          <Input type="text" name="content" placeholder="content" onChange={handleChangeInput} onKeyDown={handleKeyDownInsertBoard} />
        </div>
        <div className={cx("add-btn")}>
          <LongBtn type="button" value="Add" onClick={handleClickInsertBoard} />
        </div>
      </div>
    </section>
  );
};

export default BoardList;