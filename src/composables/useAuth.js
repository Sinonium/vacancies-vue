import { auth } from '../firebase/config'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { ref } from 'vue'

const useAuth = () => {
  const signup = async (email, password, name) => {
    const user = ref()
    const error = ref()
    try {
      user.value = await createUserWithEmailAndPassword(auth, email, password)
      user.value.user.displayName = name

      return user.value
    } catch (err) {
      error.value = err.message
    }
  }
  const login = async (email, password) => {
    let response
    let error

    try {
      response = await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
      error = err.message
    }

    return { response, error }
  }

  const logout = async () => {
    let error

    try {
      await signOut(auth)
    } catch (err) {
      error.value = err.message
    }

    return { error }
  }

  return { signup, login, logout }
}

export default useAuth
