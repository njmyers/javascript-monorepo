function throttle(fn, wait) {
    let timeout
    
    return function(...args) {
        const context = this
        clearTimeout(timeout)
        timeout = setTimeout(() => fn.call(context, ...args), wait)
    }
}