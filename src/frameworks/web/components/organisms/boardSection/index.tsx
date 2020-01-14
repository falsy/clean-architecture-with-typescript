import * as className from 'classnames/bind';
import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Presenters from '../../../../../domains/interfaces/presenters';
import Actions from '../../../../../domains/interfaces/frameworks';
import BoardList from '../../molecules/boardList';
import AddBoard from '../../molecules/addBoard';
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

  const insertFnc = async (author: string, content: string) => {
    const resStatus = await presenters.board.insertBoard(author, content);
    if (resStatus === 204) {
      dispatch(actions.board.getBoard());
    }
  };

  return (
    <div className={cx("board-section")}>
      <section>
        <h2>Board List</h2>
        <BoardList list={list} />
      </section>
      <section>
        <h2>Add Board</h2>
        <AddBoard insertFnc={insertFnc} />
      </section>
    </div>
  );
};

export default BoardSection;