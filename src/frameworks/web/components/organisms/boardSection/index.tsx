import * as className from 'classnames/bind';
import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Presenters from '../../../../../domains/interfaces/presenters';
import Actions from '../../../../../domains/interfaces/frameworks';
import BoardList from '../../molecules/boardList';
import * as styles from './index.scss';

const cx = className.bind(styles);

interface Props {
  presenters: Presenters;
  actions: Actions;
}

const BoardSection: React.FC<Props> = (props) => {
  const { presenters, actions } = props;
  const dispatch = useDispatch();

  const list = actions.board.useBoardListSelector();

  useEffect(() => {
    dispatch(actions.board.getBoard());
  }, []);

  return (
    <div className={cx("board-list")}>
      <section>
        <h2>Board List</h2>
        <BoardList list={list} />
      </section>
    </div>
  );
};

export default BoardSection;