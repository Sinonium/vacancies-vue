import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {ref} from 'vue'


const useSignup = ()=> {
  const signup = async( email, password, name)=>{
    const user = ref();
    const error=ref();
    try{
      user.value=await createUserWithEmailAndPassword(auth, email, password);
      console.log(user.value)
    }
    catch (err) {
      error = err.message
    }
  }
  const login =async()=>{

  }
  return{signup, login}
}


export default useSignup
