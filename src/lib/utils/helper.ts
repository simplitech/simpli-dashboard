import { showToast } from '$lib/utils/toast'

export function copyToClipboard(text: string, toastMessage?: string) {
  navigator.clipboard.writeText(text).then(() => showToast(toastMessage || 'Successfully copied!'))
}

export const durationRoundUpByHalfHour = (duration: number): number => {
  if (!duration) {
    return 0
  }
  const minutes = Math.floor((duration - Math.floor(duration / 3600) * 3600) / 60)
  const minutesRounded = Math.ceil(minutes / 30) * 30
  return Math.floor(duration / 3600) * 3600 + minutesRounded * 60
}

export const daysToMilis = (days: number): number => {
  // days * 24 h * 60 m * 60 s * 1000 ms
  return days * 86400000
}

/**
 * gets white or black color to contrast with the given color
 * @param colorInHexFormat color in the following format: #00ffdd
 * @returns {string|string}
 */
export const getContrastColorHex = (colorInHexFormat: string): 'black' | 'white' => {
  if (!colorInHexFormat) {
    return 'black'
  }

  const hex = colorInHexFormat.replace('#', '')
  const bigint = parseInt(hex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  const brightness = (r * 299 + g * 587 + b * 114) / 1000
  return brightness > 125 ? 'black' : 'white'
}

export const chunkArray = (array: string[], chunkSize: number): string[][] => {
  const chunkedArray = []
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize)
    chunkedArray.push(chunk)
  }
  return chunkedArray
}

export function clickOutside(node: HTMLElement, ignore?: string) {
  const handleClick = (event: Event) => {
    const target = event.target as HTMLElement
    if (!event.target || (ignore && target.closest(ignore))) {
      return
    }

    if (node && !node.contains(target) && !event.defaultPrevented) {
      node.dispatchEvent(new CustomEvent('click_outside'))
    }
  }

  document.addEventListener('click', handleClick, true)

  return {
    destroy() {
      document.removeEventListener('click', handleClick, true)
    },
  }
}

/**
 * @param date 'dd/mm/yyyy'
 */
export const dateStringToDate = (date: string) => {
  const dateParts = date.split('/')

  return new Date(+dateParts[2], parseInt(dateParts[1]) - 1, +dateParts[0])
}
