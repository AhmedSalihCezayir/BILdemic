import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    sendEmailVerification, 
    signOut,
    sendPasswordResetEmail, 
    signInWithEmailAndPassword} from "firebase/auth";

import { equalTo, get, getDatabase, orderByChild, onValue, query, ref, set } from "firebase/database";

import CafeteriaStaff from "./CafeteriaStaff";
import DiagnovirTester from "./DiagnovirTester";
import HealthCenterStaff from "./HealthCenterStaff";
import Instructor from "./Instructor";
import SportStaff from "./SportStaff";
import Student from './Student';
    
export default class LoginManager {

    //Properties
    private static instance: LoginManager | null = null;

    //Constructor
    private LoginManager() {
        
    }

    //Methods
    public static getInstance(): LoginManager{
        if(this.instance == null) {
            this.instance = new LoginManager();
        }
        return this.instance;
    }

    public async createUser(name:string, mail:string, password:string, role:string, address:string, phoneNumber:string, hesCode:string, ID:number, resideInDorm:boolean, roomMateNames:string) {

        createUserWithEmailAndPassword(getAuth(), mail, password) .then(async (userCredential) => 
        {
            if (userCredential) {
                await sendEmailVerification(userCredential.user);
                await signOut(getAuth());
            }
            const userUID = userCredential.user.uid;
            
            const db = getDatabase();

            if (role === "Student") {
                const student = new Student(name, mail, password, role, address, phoneNumber, hesCode, ID, resideInDorm, roomMateNames);
                student.Uid = userUID;
                return set(ref(db, `Users/${userCredential.user.uid}`), student);
            }
            else if (role === "Instructor") {
                const instructor = new Instructor(name, mail, password, role, address, phoneNumber, hesCode, ID, false, []);
                instructor.Uid = userUID;
                return set(ref(db, `Users/${userCredential.user.uid}`), instructor);
            }
            else if (role === "CafeteriaStaff") {
                const cafeteriaStaff = new CafeteriaStaff(name, mail, password, role, address, phoneNumber, hesCode);
                cafeteriaStaff.Uid = userUID;
                return set(ref(db, `Users/${userCredential.user.uid}`), cafeteriaStaff);
            }
            else if (role === "HealthCenterStaff") {
                const healthCenterStaff = new HealthCenterStaff(name, mail, password, role, address, phoneNumber, hesCode);
                healthCenterStaff.Uid = userUID;
                return set(ref(db, `Users/${userCredential.user.uid}`), healthCenterStaff);
            }
            else if (role === "DiagnovirTester") {
                const diagnovirTester = new DiagnovirTester(name, mail, password, role, address, phoneNumber, hesCode);
                diagnovirTester.Uid = userUID;
                return set(ref(db, `Users/${userCredential.user.uid}`), diagnovirTester);
            }
            else if (role === "SportsCenterStaff") {
                const sportStaff = new SportStaff(name, mail, password, role, address, phoneNumber, hesCode);
                sportStaff.Uid = userUID;
                return set(ref(db, `Users/${userCredential.user.uid}`), sportStaff);
            }
    })
    .catch((error) => {
        console.log(error.message);
    });
    } 

    public async signIn(email: string, password: string) {
        return signInWithEmailAndPassword(getAuth(), email, password);
    }

    public async logout() {  
        return signOut(getAuth());
    }

    public async resetPassword(email: string) {
        return sendPasswordResetEmail(getAuth(), email);
    }

    public getCurrentUserRole() {
        const db = getDatabase();
        const reference = ref(db, `Users/${getAuth().currentUser?.uid}/_role`);

        let role;
        onValue(reference, (snapshot) => {
            role = snapshot.val();   
        })
        return role;
    }
}