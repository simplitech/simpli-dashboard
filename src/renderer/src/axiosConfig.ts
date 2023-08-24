import axios from 'axios'
import { showToast } from './toast'
import { Error } from './clickupServices'

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.data.ECODE === Error.ACCESS_078) {
      const id = error.response.data.meta.authorization_failures[0].object_id
      showToast(`You don't have access to Clickup Task: #${id}\n Skipping...`, 'red')
    } else {
      showToast(`Error: ${error.message}`, 'red')
    }

    return Promise.reject(error)
  },
)

export default axios
