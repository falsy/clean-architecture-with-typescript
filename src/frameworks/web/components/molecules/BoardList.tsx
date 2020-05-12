import * as React from "react";
import BoardItem from '../atoms/BoardItem';
import CommentItem from '../atoms/CommentItem';
import { IBoardVM } from '@interfaces/viewModels/board';

interface IProps {
  list: Array<IBoardVM>;
}

const BoardList: React.FC<IProps> = (props) => {
  const { list } = props;

  return (
    <div className={"board-list"}>
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