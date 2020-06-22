import { ISessionVO } from '@domains/vos/interfaces/iSession';

export interface ISessionUseCase {
  login(SessionVO: ISessionVO): Promise<string>;
  getToken(): string;
  addToken(token: string): void;
  removeToken(): void;
}