import { firestore } from '@/firebase/config'
import { doc, updateDoc, getDoc, Timestamp } from 'firebase/firestore'
import { user } from '@/composables/getUser'

const update = () => {
  const updateTeacher = async (collectionName, id, newName, newDoc) => {
    const userDoc = doc(firestore, collectionName, id)

    const test = await getDoc(userDoc)

    return await updateDoc(userDoc, {
      isTeacher: true,
      photo:
        'https://firebasestorage.googleapis.com/v0/b/vacancies-vue.appspot.com/o/images%2FteacherImages%2Fatabek.png?alt=media&token=28c9c4e1-a477-45ba-adc3-b3d6d7470ba0',
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

  const addLikedCourse = async (collectionName, courseId) => {
    const courseDoc = doc(firestore, collectionName, user.value.uid)
    const test = await getDoc(courseDoc)

    return await updateDoc(courseDoc, {
      likedCourse: [...test.data().likedCourse, courseId],
    })
  }

  return {
    updateTeacher,
    updateGrades,
    updateReviews,
    updateUserBuy,
    updateCourse,
    updateCoursesRaiting,
    addLikedCourse,
  }
}

export default update
