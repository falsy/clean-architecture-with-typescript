import * as className from 'classnames/bind';
import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Presenters from '../../../../../domains/interfaces/presenters';
import Actions from '../../../../../domains/interfaces/frameworks';
import BoardItem from '../../atoms/boardItem';
import * as styles from './index.scss';

const cx = className.bind(styles);

interface Props {
  presenters: Presenters;
  actions: Actions;
}

const BoardList: React.FC<Props> = (props) => {
  const { presenters, actions } = props;
  const dispatch = useDispatch();

  const list = actions.board.useBoardListSelector();

  useEffect(() => {
    dispatch(actions.board.getBoard());
  }, []);

  return (
    <div className={cx("board-list")}>
      {list.length > 0 && (
        <ul>
          {list.map(board => (
            <BoardItem key={board.id} presenters={presenters} actions={actions} board={board} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default BoardList;