module.exports = {
  isEmail: (email) => (email && /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(email)), // eslint-disable-line
  isValidPassword: password => (password && password.toString().length >= 6),
  validDisplayName: text => (text && /^[\w\s]+$/.test(text)),
  isValidAvatar: avatar => (avatar && /^(orange|red|purple|yellow|magenta|green|light-(blue|grey))_face-[1-9]_(orange|red|purple|yellow|magenta|green|light-(blue|grey))\.png$/.test(avatar)),
}
