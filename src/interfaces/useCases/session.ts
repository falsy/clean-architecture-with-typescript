import { ISessionVO } from '../valueObjects/session';

export interface ISessionUseCase {
  login(SessionVO: ISessionVO): Promise<string>;
  getToken(): string;
  addToken(token: string): void;
  removeToken(): void;
}