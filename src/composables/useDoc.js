import { ref } from 'vue'
import { firestore } from '@/firebase/config'
import { doc, onSnapshot } from 'firebase/firestore'
import { onUnmounted } from '@vue/composition-api/dist/vue-composition-api.common'

const useDoc = () => {
  const getSingleDoc = async (collectionName, id) => {
    const documents = ref(null)
    const error = ref(null)
    try {
      const myCollection = doc(firestore, collectionName, id)
      const unsub = onSnapshot(myCollection, (doc) => {
        documents.value = { ...doc.data(), id: doc.id }
        console.log(documents.value)
      })

      onUnmounted(() => {
        unsub()
      })
    } catch (err) {
      error.value = 'Данные не получины ошибка'
    }

    return { documents, error }
  }

  return { getSingleDoc }
}

export default useDoc
