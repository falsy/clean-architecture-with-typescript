export interface IWebStorage {
  getToken(): string;
  addToken(token: string): void;
  removeToken(): void;
}