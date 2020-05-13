import * as React from "react";
import { useEffect } from "react";
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { IBoardStateGroup } from '@interfaces/frameworks/board';
import presenters from '@adapters/presenters';
import BoardList from '../molecules/BoardList';
import AddBoard from '../molecules/AddBoard';
import { IBoardEntity } from '@interfaces/entities/board';
import BoardVM from '@frameworks/web/viewModels/Board';

const SBoardSectionArea = styled.section`
  margin-top: 40px;
  &:first-child {
    margin-top: 0;
  }
`;

const SSectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 200;
`;

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
    <div className={"board-section"}>
      <SBoardSectionArea>
        <SSectionTitle>Board</SSectionTitle>
        <BoardList list={boardVMList} />
      </SBoardSectionArea>
      <SBoardSectionArea>
        <SSectionTitle>Add Post</SSectionTitle>
        <AddBoard insertFnc={insertFnc} />
      </SBoardSectionArea>
    </div>
  );
};


export default BoardSection;