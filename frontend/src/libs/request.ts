import axios, { AxiosRequestConfig } from 'axios'

// Hardcoded URL for testing
const API_URL = 'http://127.0.0.1:8000'

const request = async (
  endpoint: string,
  method: string,
  body?: any,
  config?: AxiosRequestConfig
): Promise<any> => {
  try {
    const response = await axios({
      url: `${API_URL}${endpoint}`, // Correctly concatenate the API URL and endpoint
      method: method,
      data: body,
      headers: {
        'Content-Type': 'application/json'
      },
      ...config
    })
    return response.data
  } catch (error) {
    console.error('Error in request:', error)
    throw error
  }
}

export default request
