import * as className from 'classnames/bind';
import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IBoardStateGroup } from '@interfaces/frameworks/board';
import presenters from '@adapters/presenters';
import BoardList from '../../molecules/boardList';
import AddBoard from '../../molecules/addBoard';
import * as styles from './index.scss';
import { IBoardEntity } from '@interfaces/entities/board';
import BoardVM from '@frameworks/web/viewModels/Board';

const cx = className.bind(styles);

const BoardSection: React.FC = () => {
  const dispatch = useDispatch();

  const list: Array<IBoardEntity> = useSelector((state: IBoardStateGroup) => state.board.list);
  const boardVMList = list.map(boardEntity => new BoardVM(boardEntity));

  useEffect(() => {
    const asyncFnc = async () => {
      dispatch(await presenters.board.getBoards());
    };
    asyncFnc();
  }, []);

  const insertFnc = async (author: string, content: string) => {
    const resStatus = await presenters.board.insertBoard(author, content);
    if (resStatus === 200) {
      dispatch(await presenters.board.getBoards());
    }
  };

  return (
    <div className={cx("board-section")}>
      <section>
        <h2>Board</h2>
        <BoardList list={boardVMList} />
      </section>
      <section>
        <h2>Add Post</h2>
        <AddBoard insertFnc={insertFnc} />
      </section>
    </div>
  );
};


export default BoardSection;