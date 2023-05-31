import { useEffect } from 'react'
import { fetchDog } from '@/api/animal.api'
import LazySpinner from './LazySpinner'
import { useApi } from '@/api/hooks/useApi'

const useFetchDog = () => {
  const {
    data: dog,
    setData: setDog,
    exec: initFetchDog,
    status: fetchDogStatus,
    setStatus: setFetchDogStatus,
    isIdle: isFetchDogStatusIdle,
    isPending: isFetchDogStatusPending,
    isError: isFetchDogStatusError,
    isSuccess: isFetchDogStatusSuccess,
  } = useApi(() => fetchDog().then((response) => response.data.message))

  return {
    dog,
    fetchDogStatus,
    initFetchDog,
    isFetchDogStatusIdle,
    isFetchDogStatusPending,
    isFetchDogStatusError,
    isFetchDogStatusSuccess,
  }
}

function AnimalExampleWithApiStates() {
  const {
    dog,
    initFetchDog,
    isFetchDogStatusIdle,
    isFetchDogStatusPending,
    isFetchDogStatusError,
    isFetchDogStatusSuccess,
  } = useFetchDog()

  useEffect(() => {
    initFetchDog()
  }, [])

  return (
    <div className="max-w-2xl mx-auto my-8">
      <div className="flex justify-center gap-8">
        <div className="w-64 h-64">
          {isFetchDogStatusIdle ? <p>Welcome</p> : null}
          <LazySpinner show={isFetchDogStatusPending} delay={400} />
          {isFetchDogStatusError ? <p>There was a problem</p> : null}
          {isFetchDogStatusSuccess ? (
            <img className="object-cover w-full h-64" src={dog} alt="Dog" />
          ) : null}
        </div>
      </div>

      <button
        onClick={initFetchDog}
        className="p-4 mt-4 text-blue-100 bg-blue-800"
      >
        Fetch animals
      </button>
    </div>
  )
}

export default AnimalExampleWithApiStates
