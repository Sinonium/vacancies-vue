import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import useSignup from './composables/usesignup'


const signupEmail = ref("");
const signupPassword = ref("");
const signupName = ref("");

// const signUp = async () => {
//   const createUser = await useSignup(signupEmail.value,signupPassword.value,signupName.value)
// }
const useSignup = async (email, password, name) => {
  let response
  let error
 const createUser = await useSignup(signupEmail.value,signupPassword.value,signupName.value)

  try {
    response = await createUserWithEmailAndPassword(auth, email, password)
  } catch (err) {
    error = err.message
  }

  return { response, error,signUp,createUser}
}

export default useSignup
