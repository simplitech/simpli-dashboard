import axios from 'axios'
import { showToast } from './toast'
import { Error } from './clickupServices'

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.data.ECODE === Error.ACCESS_078) {
      // pass
    } else {
      showToast(`Error: ${error.message}`, 'red')
    }

    return Promise.reject(error)
  },
)

export default axios
