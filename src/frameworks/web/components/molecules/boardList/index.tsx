import * as className from 'classnames/bind';
import * as React from "react";
import { BoardData } from '../../../../../domains/interfaces/entities/board';
import BoardItem from '../../atoms/boardItem';
import * as styles from './index.scss';

const cx = className.bind(styles);

interface Props {
  list: Array<BoardData>
}

const BoardList: React.FC<Props> = (props) => {
  const { list } = props;

  return (
    <div className={cx("board-list")}>
      {list.length > 0 && (
        <ul>
          {list.map(board => (
            <BoardItem key={board.id} board={board} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default BoardList;