import ILayerDTO from "./interfaces/ILayerDTO"

export default class LayerDTO<T> implements ILayerDTO<T> {
  readonly isError: boolean
  readonly message: string
  readonly data?: T
  readonly errorCode?: string
  readonly errorDetails?: any

  constructor({
    isError = false,
    message = "success",
    data,
    errorCode,
    errorDetails
  }: {
    isError?: boolean
    message?: string
    data?: T
    errorCode?: string
    errorDetails?: any
  } = {}) {
    this.isError = isError
    this.message = message
    this.data = data
    this.errorCode = errorCode
    this.errorDetails = errorDetails
  }
}
