import * as className from 'classnames/bind';
import * as React from "react";
import BoardItem from '../../atoms/boardItem';
import CommentItem from '../../atoms/commentItem';
import * as styles from './index.scss';
import { IBoardVM } from '@interfaces/viewModels/board';

const cx = className.bind(styles);

interface IProps {
  list: Array<IBoardVM>;
}

const BoardList: React.FC<IProps> = (props) => {
  const { list } = props;

  return (
    <div className={cx("board-list")}>
      {list.length > 0 && (
        <ul>
          {list.map(board => (
            <li key={board.id}>
              <BoardItem board={board} />
              <ul>
                {board.comments.map(comment => (
                  <CommentItem key={comment.id} comment={comment} />
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BoardList;