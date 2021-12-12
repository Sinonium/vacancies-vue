import { firestore } from '@/firebase/config'
import { doc, updateDoc, getDoc, Timestamp } from 'firebase/firestore'

const update = () => {
  const updateTeacher = async (collectionName, id, newName, newDoc) => {
    const userDoc = doc(firestore, collectionName, id)

    const test = await getDoc(userDoc)

    return await updateDoc(userDoc, {
      isTeacher: true,
      photo: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg',
      name: newName,
      description: newDoc,
      // ...test.data().description,
      // {
      //   teacherName: 'Janybek',
      //   text: 'Realy',
      // },
    })
  }

  const updateReviews = async (
    collectionName,
    id,
    newData,
    rating,
    studentName
  ) => {
    const moreInfoDoc = doc(firestore, collectionName, id)

    const test = await getDoc(moreInfoDoc)

    return await updateDoc(moreInfoDoc, {
      reviews: [
        ...test.data().reviews,
        {
          userName: studentName,
          text: newData,
          grade: Number(rating),
          createdAt: Timestamp.fromDate(new Date()),
        },
      ],
    })
  }
  const updateGrades = async (collectionName, id, rating) => {
    const moreInfoDoc = doc(firestore, collectionName, id)

    const test = await getDoc(moreInfoDoc)

    return await updateDoc(moreInfoDoc, {
      grades: [...test.data().grades, Number(rating)],
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

  const updateCourse = async (id) => {
    const moreInfoDoc = doc(firestore, 'courses', id)

    const test = await getDoc(moreInfoDoc)
    let ab = test.data().students
    return await updateDoc(moreInfoDoc, {
      ...test.data(),
      students: ab + 1,
    })
  }

  const updateCoursesRaiting = async (collectionName, courseId, newGrade) => {
    const courseDoc = doc(firestore, collectionName, courseId)

    return await updateDoc(courseDoc, {
      grade: newGrade,
    })
  }

  return {
    updateTeacher,
    updateReviews,
    updateUserBuy,
    updateCourse,
    updateCoursesRaiting,
  }
}

export default update
