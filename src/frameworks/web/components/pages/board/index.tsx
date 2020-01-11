import * as className from 'classnames/bind';
import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Presenters from '../../../../../domains/interfaces/presenters';
import Actions from '../../../../../domains/interfaces/frameworks';
import BaordList from '../../sections/boardList';
import * as styles from './board.scss';

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
      <BaordList presenters={presenters} actions={actions} />
    </div>
  );
};

export default Board;