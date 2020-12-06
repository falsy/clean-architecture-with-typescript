export interface IStorage {
  get(name: string): Promise<string>
  set(name: string, value: string): void
  remove(name: string): void
}