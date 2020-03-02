import * as className from 'classnames/bind';
import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import actions from '@frameworks/web/redux/actions';
import BoardList from '../../molecules/boardList';
import AddBoard from '../../molecules/addBoard';
import * as styles from './index.scss';

const cx = className.bind(styles);

const BoardSection: React.FC = () => {
  const dispatch = useDispatch();

  const list = actions.board.useBoardListSelector();

  useEffect(() => {
    const asyncFnc = async () => {
      dispatch(await actions.board.getBoards());
    };
    asyncFnc();
  }, []);

  const insertFnc = async (author: string, content: string) => {
    const resStatus = await actions.board.insertBoard(author, content);
    if (resStatus === 200) {
      dispatch(await actions.board.getBoards());
    }
  };

  return (
    <div className={cx("board-section")}>
      <section>
        <h2>Board</h2>
        <BoardList list={list} />
      </section>
      <section>
        <h2>Add Post</h2>
        <AddBoard insertFnc={insertFnc} />
      </section>
    </div>
  );
};


export default BoardSection;