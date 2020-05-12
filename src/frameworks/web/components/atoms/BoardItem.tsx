import * as React from "react";
import { IBoardData } from '@interfaces/entities/board';

interface IProps {
  board: IBoardData;
}

const BoardItem: React.FC<IProps> = (props) => {
  const { board: { id, author, content, createAt } } = props;
  const createDate = new Date(createAt);

  return (
    <div className={"board-item"}>
      <p>{id}</p>
      <p>{author}</p>
      <p>{content}</p>
      <p>{`${createDate.getFullYear()}-${createDate.getMonth() + 1}-${createDate.getDate()}`}</p>
    </div>
  );
};

export default BoardItem;