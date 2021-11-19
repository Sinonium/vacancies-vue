import { auth } from '@/firebase/config'
import { signOut } from 'firebase/auth'

const useSignOut = async () => {
  let error

  try {
    await signOut(auth)
  } catch (err) {
    error.value = err.message
  }

  return { error }
}

export default useSignOut
