import axios, { AxiosRequestConfig } from 'axios'

const API_URL = 'http://127.0.0.1:8000'

const request = async (
  endpoint: string,
  method: string,
  body?: any,
  config?: AxiosRequestConfig
): Promise<any> => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      ...config?.headers // This allows overriding the default content type
    }

    const response = await axios({
      url: `${API_URL}${endpoint}`,
      method: method,
      data: body,
      headers: headers,
      ...config // Spread the remaining config, if any
    })

    return response.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(
        'Request error:',
        error.response.status,
        error.response.data
      )
    } else {
      console.error('Error in request:', error)
    }
    throw error
  }
}

export default request
