import axios, { AxiosError, type AxiosRequestConfig, type AxiosResponse } from 'axios'
import { showToast } from './toast'

const MAX_RETRIES = 3
const RETRY_DELAY = 1000 // 1 second

function createAxiosInstance() {
  const instance = axios.create()

  instance.interceptors.response.use(undefined, async (error: AxiosError) => {
    if (shouldRetry(error)) {
      return retryRequest(error.config, 1)
    }

    showToast(`Error: ${error.message}`, 'red')
    return Promise.reject(error)
  })

  return instance
}

async function retryRequest(config: AxiosRequestConfig, retryCount: number): Promise<AxiosResponse> {
  try {
    const response = await axios(config)
    return response
  } catch (error) {
    if (retryCount <= MAX_RETRIES) {
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY))
      return retryRequest(config, retryCount + 1)
    }

    showToast(`Error: ${error.message}`, 'red')
    return Promise.reject(error)
  }
}

function shouldRetry(error: AxiosError) {
  return error.code === 'ECONNABORTED' || error.response?.status === 504
}

const axiosWithInterceptors = createAxiosInstance()

export default axiosWithInterceptors
