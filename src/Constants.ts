export const __PROD__ = process.env.NODE_ENV === 'production'

//
export function errorMessage(message: string) {
  if (!__PROD__) {
    console.log(({
      success: false,
      message: message,
      data: null
    }))
  }
  return ({
    success: false,
    message: message,
    data: null
  })
}
