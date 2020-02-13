import * as className from 'classnames/bind';
import * as React from "react";
import { IBoardData } from '@interfaces/entities/board';
import BoardItem from '../../atoms/boardItem';
import * as styles from './index.scss';

const cx = className.bind(styles);

interface IProps {
  list: Array<IBoardData>
}

const BoardList: React.FC<IProps> = (props) => {
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