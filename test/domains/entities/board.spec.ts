import { IBoardData } from '@interfaces/entities/board';
import Board from '@domains/entities/Board';

describe('board entity', () => {
  
  test('constructor', () => {
    const id = 1;
    const author = 'author';
    const content = 'content';
    const createAt = new Date();
    
    const boardData: IBoardData = { id, author, content, createAt };
    const board = new Board(boardData);

    expect(board.id).toEqual(id);
    expect(board.author).toEqual(author);
    expect(board.content).toEqual(content);
    expect(board.createAt).toEqual(createAt);
  });
});