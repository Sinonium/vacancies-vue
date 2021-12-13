import { ref } from 'vue'
import { firestore } from '@/firebase/config'
import { doc, onSnapshot, setDoc, getDoc, updateDoc } from 'firebase/firestore'
import { onUnmounted } from '@vue/composition-api/dist/vue-composition-api.common'
import { user } from '@/composables/getUser'
import { v4 as uuid } from 'uuid'

const useDoc = () => {
  const generatorId = uuid()

  const addCollection = async (
    collectionName,
    newDoc,
    createId = true,
    myId
  ) => {
    console.log(generatorId)
    const docRef = doc(firestore, collectionName, createId ? generatorId : myId)

    try {
      await setDoc(docRef, newDoc)
    } catch (err) {
      console.log(err.message)
    }
  }

  const updateUserAddCourse = async (collectionName) => {
    const userDoc = doc(firestore, collectionName, user.value.uid)

    const test = await getDoc(userDoc)

    console.log(user.value.uid)

    return await updateDoc(userDoc, {
      addCourses: [...test.data().addCourses, generatorId],
    })
  }

  const getSingleDoc = async (collectionName, paramId) => {
    const documents = ref(null)
    const error = ref(null)
    try {
      console.log(paramId)
      const myCollection = doc(firestore, collectionName, paramId)
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

  return { getSingleDoc, addCollection, updateUserAddCourse }
}

export default useDoc
