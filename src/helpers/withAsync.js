export async function withAsync(fn) {
  try {
    if (typeof fn !== 'function')
      throw new Error('The first argument must be a function')
    const response = await fn()
    return {
      response,
      error: null,
    }
  } catch (error) {
    return {
      error,
      response: null,
    }
  }
}
