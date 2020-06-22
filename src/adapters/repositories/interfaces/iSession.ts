import { ISessionVO } from '@domains/vos/interfaces/iSession';
import { ITokenDTO } from "@adapters/infrastructures/interfaces/iRemote";

export interface ISessionRepository {
  login(SessionVO: ISessionVO): Promise<ITokenDTO>;
  getToken(): string;
  addToken(token: string): void;
  removeToken(): void;
}