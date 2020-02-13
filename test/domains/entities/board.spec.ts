import { IBoardData } from '@interfaces/entities/board';
import Board from '@domains/entities/Board';

describe('create vo', () => {
  test('create field value object', () => {
    const id = 1;
    const author = 'author';
    const content = 'content';
    const createAt = new Date().getTime();
    
    const boardData: IBoardData = { id, author, content, createAt };
    const board = new Board(boardData);

    expect(board.id).toEqual(id);
    expect(board.author).toEqual(author);
    expect(board.content).toEqual(content);
    expect(board.createAt).toEqual(createAt);
  });
});