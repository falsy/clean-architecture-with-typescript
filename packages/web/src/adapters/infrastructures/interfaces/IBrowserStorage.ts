export default interface IBrowserStorage {
  getItem(key: string): Promise<string | null>
  setItem(key: string, value: string): Promise<boolean>
  removeItem(key: string): Promise<boolean>
  clear(): Promise<boolean>
}
