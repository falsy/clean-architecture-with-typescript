import * as className from 'classnames/bind';
import * as React from "react";
import { memo } from "react";
import Presenters from '../../../../../domains/interfaces/presenters';
import Actions from '../../../../../domains/interfaces/frameworks';
import { BoardData } from '../../../../../domains/interfaces/entities/board';
import * as styles from './boardItem.scss';

const cx = className.bind(styles);

interface Props {
  presenters: Presenters;
  actions: Actions;
  board: BoardData
}

const BoardItem: React.FC<Props> = (props) => {
  const { presenters, actions, board: { id, author, content, createAt } } = props;
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