const getUrlParams = () => new URLSearchParams(window.location.search)

const getRedirectUrl = () => {
  const urlParams = getUrlParams()
  return urlParams.has('redirect_url') ? urlParams.get('redirect_url') : '/'
}

export default { getUrlParams, getRedirectUrl }
