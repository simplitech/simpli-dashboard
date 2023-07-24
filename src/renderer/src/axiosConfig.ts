import axios from 'axios'
import { showToast } from './toast'

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    showToast(`Error: ${error.message}`, 'red')
    return Promise.reject(error)
  },
)

export default axios
