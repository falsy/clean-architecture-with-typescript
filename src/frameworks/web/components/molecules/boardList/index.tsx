import * as className from 'classnames/bind';
import * as React from "react";
import { IBoardEntity } from '@interfaces/entities/board';
import BoardItem from '../../atoms/boardItem';
import CommentItem from '../../atoms/commentItem';
import * as styles from './index.scss';

const cx = className.bind(styles);

interface IProps {
  list: Array<IBoardEntity>
}

const BoardList: React.FC<IProps> = (props) => {
  const { list } = props;

  return (
    <div className={cx("board-list")}>
      {list.length > 0 && (
        <ul>
          {list.map(board => (
            <>
              <BoardItem key={board.id} board={board} />
              {board.comments.map(comment => (
                <CommentItem key={comment.id} comment={comment} />
              ))}
            </>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BoardList;