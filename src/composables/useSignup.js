import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const useSignup = async (email, password) => {
  let response
  let error

  try {
    response = await createUserWithEmailAndPassword(auth, email, password)
  } catch (err) {
    error = err.message
  }

  return { response, error }
}

export default useSignup
