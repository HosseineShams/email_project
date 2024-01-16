import axios, { AxiosRequestConfig } from 'axios'

const API_URL = process.env.REACT_APP_API_URL

const request = async (
  endpoint: string,
  method: string,
  body?: any,
  config?: AxiosRequestConfig
): Promise<any> => {
  const response = await axios(API_URL + endpoint, {
    method: method,
    data: body,
    ...config
  })
  return response.data
}
export default request
