import { firestore } from '@/firebase/config'
import { doc, updateDoc, getDoc, Timestamp } from 'firebase/firestore'

const update = () => {
  const updateTeacher = async () => {
    const userDoc = doc(firestore, 'users', 'Aqu1DTLSoVTXz5sUoH9HbU1OKSA2')

    const test = await getDoc(userDoc)

    return await updateDoc(userDoc, {
      isTeacher: true,
      description:
        // ...test.data().description,
        {
          teacherName: 'Janybek',
          text: 'Realy',
        },
    })
  }

  const updateReviews = async (newData) => {
    const moreInfoDoc = doc(
      firestore,
      'more info',
      '1d60f4f6-5d15-4006-b74e-0e32eb1563f3'
    )

    const test = await getDoc(moreInfoDoc)

    return await updateDoc(moreInfoDoc, {
      reviews: [
        ...test.data().reviews,
        {
          userName: 'Nurs',
          text: newData,
          createdAt: Timestamp.fromDate(new Date()),
        },
      ],
    })
  }

  const updateUserBuy = async (userId, id) => {
    console.log(userId)
    console.log(id)

    const userDoc = doc(firestore, 'users', userId)

    const test = await getDoc(userDoc)

    return await updateDoc(userDoc, {
      userBuy: [...test.data().userBuy, id],
    })
  }

  return { updateTeacher, updateReviews, updateUserBuy }
}

export default update
