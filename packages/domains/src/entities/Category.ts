import ICategory from "./interfaces/ICategory"

export default class Category implements ICategory {
  readonly id: string
  readonly name: string

  constructor(id: string, name: string) {
    this.id = id
    this.name = name
  }
}
