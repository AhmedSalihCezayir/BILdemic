import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  sendEmailVerification, 
  signInWithEmailAndPassword, 
  signOut } from "firebase/auth";
import { useRouter } from 'vue-router';

export default function useAuth() {
  const auth = getAuth();
  const router = useRouter();

  const register = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) {
          sendEmailVerification(userCredential.user);
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