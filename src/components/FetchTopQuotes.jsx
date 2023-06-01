import { useQuery } from '@tanstack/react-query'
import { fetchTopQuotes } from '@/api/quote.api'

const FetchTopQuotes = () => {
  const {
    data: quotes,
    isLoading,
    isSuccess,
    isError,
  } = useQuery(['top-quotes'], () => fetchTopQuotes())
  return (
    <div className="py-8 max-w-2xl mx-auto">
      <div>
        <h2 className="font-bold text-2xl mb-4">Top Quotes</h2>

        {isError ? (
          <p className="text-red-900">
            There was a problem with fetching quotes
          </p>
        ) : null}
        {isLoading ? <p>Fetching quotes</p> : null}

        {isSuccess ? (
          <div className="max-h-96 overflow-y-auto divide-y">
            {quotes?.map((quote) => {
              return (
                <blockquote
                  key={quote.id}
                  className="relative p-4 text-xl italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote"
                >
                  <p className="mb-4">&ldquo;{quote.quote}&rdquo;</p>
                  <cite className="flex items-center justify-center">
                    <div className="flex flex-col items-start">
                      <span className="mb-1 text-sm italic font-bold">
                        {quote.author}
                      </span>
                    </div>
                  </cite>
                </blockquote>
              )
            })}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default FetchTopQuotes
