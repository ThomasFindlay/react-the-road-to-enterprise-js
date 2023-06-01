import api from './api'

export const fetchTopQuotes = (config = {}) =>
  api.get('quotes/top_quotes', config).then((res) => res.data.quotes)

export const postQuote = (quote) => api.post('quotes', quote)
export const resetQuotes = () => api.post('quotes/reset', {})

export const fetchQuotesByPage = (page) =>
  api.get('quotes', { params: { page } }).then((res) => res.data)

export const fetchQuotesByCursor = (cursor) =>
  api.get('quotes', { params: { cursor } }).then((res) => res.data)
