import * as className from 'classnames/bind';
import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import BoardPresenter from '../../../../../adapters/presenters/Board';
import { setBoard, useBoardListSelector } from '../../../redux/board';
import BoardList from '../../molecules/boardList';
import AddBoard from '../../molecules/addBoard';
import * as styles from './index.scss';


const cx = className.bind(styles);

const BoardSection: React.FC = () => {
  const dispatch = useDispatch();

  const list = useBoardListSelector();

  useEffect(() => {
    const asyncFnc = async () => {
      const { results } = await BoardPresenter.getBoard();
      dispatch(setBoard(results.list));
    };
    asyncFnc();
  }, []);

  const insertFnc = async (author: string, content: string) => {
    const resStatus = await BoardPresenter.insertBoard(author, content);
    if (resStatus === 200) {
      const { results } = await BoardPresenter.getBoard();
      dispatch(setBoard(results.list));
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