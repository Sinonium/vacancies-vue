import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'

const useLogin = async (email, password) => {
  let response
  let error

  try {
    response = await signInWithEmailAndPassword(auth, email, password)
  } catch (err) {
    error = err.message
  }

  return { response, error }
}

export default useLogin
