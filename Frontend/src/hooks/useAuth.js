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
          // axios.post('http://localhost:8080/createStudent', {
            // name: "a",
            // mail:"n",
            // password: "df",
            // role:"Student",
            // address: "afasfasf",
            // phoneNumber: "fafsasf",
            // hesCode: "asfasfasfa",
            // ID: 123548,
            // resideInDorm: true

          //   }
          // ).then((res) => {
          //   console.log(res)
          // })
          class User {
            constructor(name, mail, password, role, address, phoneNum) {
              this.name = name;
              this.mail = mail;
              this.password = password;
              this.role = role;
              this.address = address;
              this.phoneNum = phoneNum;
              this.profilePic = null;
              this.vaccineCard = null;
              this.Uid = null;
              this.orders = null;
              this.campusStatus = "CAMPUS_ALLOWED";
            }
          }

          const x = new User("a", "n", "df", "Student", "wqfqsfafs", "fasfasfasf")

          // axios({
          //   method: 'post',
          //   url: 'http://localhost:8080/create',
          //   data: {
          //       user: x
          //   }
          //   }).then((res) => {
          //   console.log(res)
          // })

          axios.post('http://localhost:8080/create', {
            name: "Ahmed",
            role: "Student"
          }, { headers: { 'Content-Type': 'application/json' } })

          // axios.get("http://localhost:8080/abc", { params: {
          //   a: 5,
          //   b: 9
          // }}).then((res) => {
          //   console.log(res)
          // })

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