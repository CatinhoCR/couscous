// Utility

class Utility {
  rafThrottle(callback) {
    this.something = true
    let requestId = null

    let lastArgs

    const later = context => () => {
      requestId = null
      callback.apply(context, lastArgs)
    }

    const throttled = function(...args) {
      lastArgs = args
      if (requestId === null) {
        requestId = requestAnimationFrame(later(this))
      }
    }

    throttled.cancel = () => {
      cancelAnimationFrame(requestId)
      requestId = null
    }

    return throttled
  }

  static toHash(str) {
    if (str === '') return str
    if (str.charAt(0) !== '#') {
      str = `#${str}`
    }
    return str
  }
}

export default Utility
export const util = new Utility()
