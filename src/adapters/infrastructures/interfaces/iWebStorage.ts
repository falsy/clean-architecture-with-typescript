export interface IWebStorage {
  get(name: string): string
  set(name: string, value: string): void
  remove(name: string): void
}