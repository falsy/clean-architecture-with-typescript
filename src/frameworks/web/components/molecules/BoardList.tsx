import * as React from "react";
import styled from 'styled-components';
import BoardItem from '../atoms/BoardItem';
import CommentItem from '../atoms/CommentItem';
import { IBoardVM } from '@frameworks/web/vms/interfaces/iBoard';

const SBoardUl = styled.ul`
  border-top: 1px solid #eee;
  padding: 0;
  list-style: none;
`;

const SCommentArea = styled.ul`
  background: #f5f5f5;
`;

interface IProps {
  list: Array<IBoardVM>;
}

const BoardList: React.FC<IProps> = (props) => {
  const { list } = props;

  return (
    <div className={"board-list"}>
      {list.length > 0 && (
        <SBoardUl>
          {list.map(board => (
            <li key={board.id}>
              <BoardItem board={board} />
              <SCommentArea>
                {board.comments.map(comment => (
                  <CommentItem key={comment.id} comment={comment} />
                ))}
              </SCommentArea>
            </li>
          ))}
        </SBoardUl>
      )}
    </div>
  );
};

export default BoardList;