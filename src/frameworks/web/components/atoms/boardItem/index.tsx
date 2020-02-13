import * as className from 'classnames/bind';
import * as React from "react";
import { IBoardData } from '@interfaces/entities/board';
import * as styles from './index.scss';

const cx = className.bind(styles);

interface IProps {
  board: IBoardData
}

const BoardItem: React.FC<IProps> = (props) => {
  const { board: { id, author, content, createAt } } = props;
  const createDate = new Date(createAt);

  return (
    <li className={cx("board-item")}>
      <p>{id}</p>
      <p>{author}</p>
      <p>{content}</p>
      <p>{`${createDate.getFullYear()}-${createDate.getMonth() + 1}-${createDate.getDate()}`}</p>
    </li>
  );
};

export default BoardItem;