import { ICommentData } from '@interfaces/entities/comment';
import Comment from '@domains/entities/Comment';

describe('comment entity', () => {
  
  test('constructor', () => {
    const id = 1;
    const author = 'author';
    const boardId = 1;
    const content = 'content';
    const createAt = new Date();
    
    const boardData: ICommentData = { id, boardId, author, content, createAt };
    const board = new Comment(boardData);

    expect(board.id).toEqual(id);
    expect(board.boardId).toEqual(boardId);
    expect(board.author).toEqual(author);
    expect(board.content).toEqual(content);
    expect(board.createAt).toEqual(createAt);
  });

});