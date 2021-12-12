import { ref } from 'vue'
import { firestore } from '@/firebase/config'
import { getDoc, doc } from 'firebase/firestore'

const getMoreInfo = async (collectionName, paramId) => {
  const documents = ref(null)
  const error = ref(null)
  try {
    console.log(paramId)
    const myCollection = doc(firestore, collectionName, paramId)
    const response = await getDoc(myCollection)

    documents.value = { ...response.data(), id: response.id }
  } catch (err) {
    error.value = 'Данные не получины ошибка'
  }

  return { documents, error }
}

export default getMoreInfo
