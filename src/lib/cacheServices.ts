export function setCacheItem(key: string, value: unknown, ttl = 2 * 24 * 60 * 60 * 1000) {
  localStorage.setItem(
    key,
    JSON.stringify({
      value,
      expiry: new Date().getTime() + ttl,
    }),
  )
}

export function getCacheItem(key: string) {
  const itemStr = localStorage.getItem(key)

  if (!itemStr) {
    return null
  }

  const item = JSON.parse(itemStr)

  if (new Date().getTime() > item.expiry) {
    localStorage.removeItem(key)
    return null
  }
  return item.value
}
