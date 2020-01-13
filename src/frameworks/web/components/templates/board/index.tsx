import * as className from 'classnames/bind';
import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Presenters from '../../../../../domains/interfaces/presenters';
import Actions from '../../../../../domains/interfaces/frameworks';
import Header from '../../organisms/header';
import BaordList from '../../organisms/boardList';
import * as styles from './index.scss';

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
      <Header presenters={presenters} actions={actions} />
      <div className={cx("board-content")}>
        <BaordList presenters={presenters} actions={actions} />
      </div>
    </div>
  );
};

export default Board;