import type { Config } from './helper'

export function setCacheItem(key: string, value: unknown, ttl = 2 * 24 * 60 * 60 * 1000) {
  localStorage.setItem(
    key,
    JSON.stringify({
      value,
      expiry: new Date().getTime() + ttl,
    }),
  )
}

export function getCacheItem(key: string): Config | null {
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

export function getToken() {
  const token = getCacheItem('token')

  return token ? `Bearer ${token}` : ''
}
