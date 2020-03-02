import * as className from 'classnames/bind';
import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IBoardStateGroup } from '@interfaces/frameworks/board';
import actions from '@frameworks/web/redux/actions';
import BoardList from '../../molecules/boardList';
import AddBoard from '../../molecules/addBoard';
import * as styles from './index.scss';
import { IBoardEntity } from '@interfaces/entities/board';

const cx = className.bind(styles);

const BoardSection: React.FC = () => {
  const dispatch = useDispatch();

  const list: Array<IBoardEntity> = useSelector((state: IBoardStateGroup) => state.board.list);

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