import { firestore } from '../firebase/config'
import { setDoc, doc } from '@firebase/firestore'

const addCollection = async (collectionName, newDoc, myId) => {
  const docRef = doc(firestore, collectionName, myId)

  try {
    await setDoc(docRef, newDoc)
  } catch (err) {
    console.log(err.message)
  }
}

export default addCollection
