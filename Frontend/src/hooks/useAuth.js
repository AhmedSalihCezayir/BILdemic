import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

export default function useAuth() {
  const auth = getAuth();

  const register = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((authData) => {
        if (authData) {
          sendEmailVerification(authData.user);
          return true;
        }
        return false;
      })
      .catch((error) => {
        console.log(error.message);
        return false;
      });
  }

  return {
    register
  }

}