export default interface ILayerDTO<T> {
  readonly isError: boolean
  readonly message: string
  readonly data?: T
  readonly errorCode?: string
  readonly errorDetails?: any
}
