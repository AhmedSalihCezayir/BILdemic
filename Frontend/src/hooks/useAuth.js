import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  sendEmailVerification, 
  signInWithEmailAndPassword, 
  signOut } from "firebase/auth"
import { useRouter } from 'vue-router'
import axios from 'axios'

export default function useAuth() {
  const auth = getAuth();
  const router = useRouter();

  const register = async (email, password, name, role, id, hes, resideInDorm, dorm, phone) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) {
          // Send email verification
          sendEmailVerification(userCredential.user);

          // Add the user to firestore
          axios.post('/create', {})


          router.push('/auth/login');
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  const logout = async () => {
    signOut(auth).then(() => {
      router.push('/auth/login');
    }).catch((error) => {
      console.log(error);
    });
  }

  return {
    auth,
    register,
    signInWithEmailAndPassword,
    logout
  }

}