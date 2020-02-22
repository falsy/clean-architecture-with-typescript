import { IBoardData } from '@interfaces/entities/board';
import { ICommentData, ICommentEntity } from '@interfaces/entities/comment';
import Board from '@domains/entities/Board';
import Comment from '@domains/entities/Comment';
import { IBoardEntity } from '@interfaces/entities/board';

describe('board entity', () => {

  const id = 1;
  const author = 'author';
  const content = 'content';
  const createAt = new Date();
  const boardData: IBoardData = { id, author, content, createAt };

  let board: IBoardEntity;

  beforeEach(() => {
    board = new Board(boardData);
  });
  
  test('constructor', () => {
    expect(board.id).toEqual(id);
    expect(board.author).toEqual(author);
    expect(board.content).toEqual(content);
    expect(board.createAt).toEqual(createAt);
  });

  test('push comment', () => {
    const id = 1;
    const boardId = 1;
    const author = 'comment author';
    const content = 'comment content';
    const createAt = new Date();

    const commentData: ICommentData = { id, boardId, author, content, createAt };
    const comment: ICommentEntity = new Comment(commentData);

    board.pushComment = comment;

    expect(board.comments[0]).toEqual(comment);
  });
});