import { browser } from '$app/environment'

export function setCacheItem(key: string, value: unknown, ttl = 30 * 24 * 60 * 60 * 1000) {
  if (browser) {
    localStorage.setItem(
      key,
      JSON.stringify({
        value,
        expiry: new Date().getTime() + ttl,
      }),
    )
  }
}

export function getToken(): string {
  if (browser) {
    const userData = localStorage.getItem('loggedUser')

    if (!userData) {
      return ''
    }

    const data = JSON.parse(userData)

    if (new Date().getTime() > data.expiry) {
      localStorage.removeItem('loggedUser')
      return ''
    }

    return data ? `Bearer ${data.value.token}` : ''
  }

  return ''
}

export function getLoggedUserEmail(): string {
  if (browser) {
    const userData = localStorage.getItem('loggedUser')

    if (!userData) {
      return ''
    }

    const data = JSON.parse(userData)

    return data ? data.value.email : ''
  }
}
