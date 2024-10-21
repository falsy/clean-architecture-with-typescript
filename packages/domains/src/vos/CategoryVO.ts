import ICategoryVO from "./interfaces/ICategoryVO"

export default class CategoryVO implements ICategoryVO {
  readonly categoryId: string
  readonly categoryName: string

  constructor(categoryId: string, categoryName: string) {
    this.categoryId = categoryId
    this.categoryName = categoryName
  }
}
