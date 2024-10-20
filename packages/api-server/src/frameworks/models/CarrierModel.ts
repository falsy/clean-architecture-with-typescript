import { UUIDV4 } from "sequelize"
import { Column, Model, Table, DataType } from "sequelize-typescript"

@Table
export default class CarrierModel extends Model<CarrierModel> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true
  })
  id: number

  @Column({
    type: DataType.UUID,
    defaultValue: UUIDV4,
    allowNull: false
  })
  uid: string

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  no: number

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  displayName: string

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false
  })
  isCrawlable: boolean

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false
  })
  isPopupEnabled: boolean

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  popupURL: string
}
