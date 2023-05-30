import { fetchCat, fetchDog } from '@/api/animalApi'
import { useEffect, useState } from 'react'

const useFetchDog = () => {
  const [dog, setDog] = useState()
  const initFetchDog = async () => {
    const response = await fetchDog()
    setDog(response.data.message)
  }

  return {
    dog,
    initFetchDog,
  }
}

const useFetchCat = () => {
  const [cat, setCat] = useState()
  const initFetchCat = async () => {
    const response = await fetchCat()
    setCat(response.data?.[0].url)
  }

  return {
    cat,
    initFetchCat,
  }
}

const useFetchAnimals = () => {
  const { dog, initFetchDog } = useFetchDog()
  const { cat, initFetchCat } = useFetchCat()

  const fetchAnimals = () => {
    initFetchDog()
    initFetchCat()
  }

  useEffect(() => {
    fetchAnimals()
  }, [])

  return {
    dog,
    cat,
    fetchAnimals,
  }
}

function AnimalExample() {
  const { dog, cat, fetchAnimals } = useFetchAnimals()
  return (
    <div className="max-w-2xl mx-auto my-8">
      <div className="flex gap-8">
        <div className="w-1/2">
          {cat ? (
            <img className="object-cover w-full h-64" src={cat} alt="Cat" />
          ) : null}
        </div>
        <div className="w-1/2">
          {dog ? (
            <img className="object-cover w-full h-64" src={dog} alt="Dog" />
          ) : null}
        </div>
      </div>

      <button
        onClick={fetchAnimals}
        className="p-4 mt-4 text-blue-100 bg-blue-800"
      >
        Fetch animals
      </button>
    </div>
  )
}

export default AnimalExample
