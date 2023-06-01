import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import FetchTopQuotes from '@/components/FetchTopQuotes'
import UpdateQuotes from '@/components/UpdateQuotes'
import PaginatedQuotes from '@/components/PaginatedQuotes'
import InfiniteScrollQuotes from '@/components/InfiniteScrollQuotes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import QueryCancellation from './components/QueryCancellation'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <div className="App mx-auto max-w-6xl text-center my-8">
          <h1 className="font-semibold text-2xl">
            React - The Road To Enterprise
          </h1>
          <UpdateQuotes />
          <FetchTopQuotes />
          <PaginatedQuotes />
          <InfiniteScrollQuotes />
          <QueryCancellation />
        </div>
      </QueryClientProvider>
    </>
  )
}

export default App
