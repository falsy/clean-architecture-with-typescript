import { IBoardUseCase } from '@interfaces/useCases/board';
import { IBoardRepository } from '@interfaces/repositories/board';
import { IBoardEntity } from '@interfaces/entities/board';
import Board from '@domains/aggregates/Board';
import Comment from '@domains/entities/Comment';

class BaordUseCase implements IBoardUseCase {

  readonly repository: IBoardRepository;

  constructor(sessionRepositories: IBoardRepository) {
    this.repository = sessionRepositories;
  }

  async getBoards(): Promise<Array<IBoardEntity>> {
    const { results: { list: boardList } } = await this.repository.getBoards();
    const { results: { list: commentList } } = await this.repository.getComments();

    return boardList.map(board => {
      const comments = commentList.filter(comment => comment.boardId === board.id).map(comment => new Comment(comment));
      console.log(comments);
      return new Board(board).pushComment(comments);
    });
  }

  insertBoard(author: string, content: string): Promise<number> {
    return this.repository.insertBoard(author, content);
  };

}

export default BaordUseCase;