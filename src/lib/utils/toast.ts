import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

export const showToast = (text: string, bgColor?: string) => {
  Toastify({ text: text, gravity: 'bottom', style: { background: bgColor } }).showToast()
}
