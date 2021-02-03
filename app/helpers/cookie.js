const set = (cname, cvalue, exdays, secure = false, samesite = false) => {
  const d = new Date()
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  const expires = `expires=${d.toUTCString()}`
  if (samesite) secure = true
  const samesiteflag = samesite ? ';SameSite=None' : ''
  const secureflag = secure ? ';Secure' : ''
  window.document.cookie = `${cname}=${cvalue};${expires};path=/${samesiteflag}${secureflag}`
}

const get = (name, useMatch = false) => document.cookie.split('; ').reduce((r, v) => {
  const parts = v.split('=')
  if (useMatch) { // use this to extract cookies with suffixes or prefixes
    return (parts[0].toString()).indexOf(name) > -1 ? decodeURIComponent(parts[1]) : r
  }
  return parts[0] === name ? decodeURIComponent(parts[1]) : r
}, '')

export default { get, set }
