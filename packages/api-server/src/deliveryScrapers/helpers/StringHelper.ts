export default class StringHelper {
  static trim(value: string): string {
    return value.replace(/([\n\t]{1,}|\s{2,})/g, " ").trim()
  }
}
