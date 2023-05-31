import { fetchDog } from '@/api/animal.api'
import { withAsync } from '@/helpers/withAsync'
import { useEffect, useState } from 'react'
import { IDLE, PENDING, SUCCESS, ERROR } from '@/api/constants/apiStatus'

const useFetchDog = () => {
  const [dog, setDog] = useState()
  const [fetchDogStatus, setFetchDogStatus] = useState(IDLE)

  const initFetchDog = async () => {
    setFetchDogStatus(PENDING)
    const { response, error } = await withAsync(() => fetchDog())

    if (error) {
      setFetchDogStatus(ERROR)
    } else if (response) {
      setDog(response.data.message)
      setFetchDogStatus(SUCCESS)
    }
  }

  return {
    dog,
    fetchDogStatus,
    initFetchDog,
  }
}

function AnimalExampleWithApiStates() {
  const { dog, fetchDogStatus, initFetchDog } = useFetchDog()

  useEffect(() => {
    initFetchDog()
  }, [])

  return (
    <div className="max-w-2xl mx-auto my-8">
      <div className="flex justify-center gap-8">
        <div className="w-64 h-64">
          {fetchDogStatus === IDLE ? <p>Welcome</p> : null}
          {fetchDogStatus === PENDING ? <p>Loading data...</p> : null}
          {fetchDogStatus === ERROR ? <p>There was a problem</p> : null}
          {fetchDogStatus === SUCCESS ? (
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
