import { ref } from 'vue'
import { firestore } from '@/firebase/config'
import { doc, getDoc } from '@firebase/firestore'

const useDoc = () => {
  const getSingleDoc = async (collectionName, id) => {
    const documents = ref(null)
    const error = ref(null)

    try {
      const myCollection = doc(firestore, collectionName, id)
      const response = await getDoc(myCollection)

      documents.value = { ...response.data(), id: response.id }
    } catch (err) {
      error.value = 'Данные не получины ошибка'
    }

    return { documents, error }
  }

  return { getSingleDoc }
}

export default useDoc
