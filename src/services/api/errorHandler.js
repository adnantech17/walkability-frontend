// eslint-disable-next-line no-unused-vars
export const handleError = (error) => {
  const response = {
    code: 503,
    error: error.response?.data?.message instanceof Array ? error?.response.data.message.toString() : error?.response.data.message,
    data: undefined,
    success: false
  }
  return response
}

