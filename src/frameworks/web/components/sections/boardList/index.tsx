import * as className from 'classnames/bind';
import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Presenters from '../../../../../domains/interfaces/presenters';
import Actions from '../../../../../domains/interfaces/frameworks';
import * as styles from './boardList.scss';

const cx = className.bind(styles);

interface Props {
  presenters: Presenters;
  actions: Actions;
}

const Board: React.FC<Props> = (props) => {
  const { presenters, actions } = props;
  const dispatch = useDispatch();

  return (
    <div className={cx("board")}>
      list
    </div>
  );
};

export default Board;