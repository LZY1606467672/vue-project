import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getCooike() {
  return Cookies.get(TokenKey)
}

export function setCookie(token) {
  return Cookies.set(TokenKey, token)
}

export function removeCookie() {
  return Cookies.remove(TokenKey)
}
