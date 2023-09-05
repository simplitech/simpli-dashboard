export function setCacheItem(key: string, value: unknown, ttl = 2 * 24 * 60 * 60 * 1000) {
  localStorage.setItem(
    key,
    JSON.stringify({
      value,
      expiry: new Date().getTime() + ttl,
    }),
  )
}

export function getToken(): string {
  const itemStr = localStorage.getItem('token')

  if (!itemStr) {
    return ''
  }

  const token = JSON.parse(itemStr)

  if (new Date().getTime() > token.expiry) {
    localStorage.removeItem('token')
    return ''
  }

  return token ? `Bearer ${token.value}` : ''
}
