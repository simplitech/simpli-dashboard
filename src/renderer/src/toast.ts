import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

export const showToast = (text: string) => {
  Toastify({ text: text, gravity: 'bottom' }).showToast()
}
