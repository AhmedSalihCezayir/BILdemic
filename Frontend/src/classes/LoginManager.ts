import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    sendEmailVerification, 
    signInWithEmailAndPassword, 
    signOut, Auth } from "firebase/auth";

import { getFirestore, collection, setDoc, addDoc, doc } from "firebase/firestore"; 
import { useRouter } from 'vue-router';
import {getDatabase, ref, set} from "firebase/database";
import CafeteriaStaff from "./CafeteriaStaff";
import DiagnovirTester from "./DiagnovirTester";
import HealthCenterStaff from "./HealthCenterStaff";
import Instructor from "./Instructor";
import SportStaff from "./SportStaff";
import Student from './Student';
    
export default class LoginManager {

    //Properties
    private static instance: LoginManager | null = null;
    //public CRUDManager crudManager;

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

    public createUser(name:string, mail:string, password:string, role:string, address:string, phoneNumber:string, hesCode:string, ID:number, resideInDorm:boolean, roomMateNames:string):boolean{
        const router = useRouter();

        createUserWithEmailAndPassword(getAuth(), mail, password) .then(async (userCredential) => 
        {
            if (userCredential) {
                await sendEmailVerification(userCredential.user);
            }
            const db = getDatabase();
            const crole = role.replace(/ /g, "") + "s";

            if (role === "Student") {
                const student = new Student(name, mail, password, role, address, phoneNumber, hesCode, ID, resideInDorm, roomMateNames);
                set(ref(db, `Users/${crole}/${userCredential.user.uid}`), student);
                return true;
            }
            else if (role === "Instructor") {
                const instructor = new Instructor(name, mail, password, role, address, phoneNumber, hesCode, ID, false, null);
                set(ref(db, `Users/${crole}/${userCredential.user.uid}`), instructor);
                return true;
            }
            else if (role === "Cafeteria Staff") {
                const cafeteriaStaff = new CafeteriaStaff(name, mail, password, role, address, phoneNumber, hesCode);
                set(ref(db, `Users/${crole}/${userCredential.user.uid}`), cafeteriaStaff);
                return true;
            }
            else if (role === "Health Center Staff") {
                const healthCenterStaff = new HealthCenterStaff(name, mail, password, role, address, phoneNumber, hesCode);
                set(ref(db, `Users/${crole}/${userCredential.user.uid}`), healthCenterStaff);
                return true;
            }
            else if (role === "Diagnovir Tester") {
                const diagnovirTester = new DiagnovirTester(name, mail, password, role, address, phoneNumber, hesCode);
                set(ref(db, `Users/${crole}/${userCredential.user.uid}`), diagnovirTester);
                return true;
            }
            else if (role === "Sports Center Staff") {
                const sportStaff = new SportStaff(name, mail, password, role, address, phoneNumber, hesCode);
                set(ref(db, `Users/${crole}/${userCredential.user.uid}`), sportStaff);
                return true;
            }
            else {
                return false;
            }
    })
    .catch((error) => {
        console.log(error.message);
        return false;
    });
    return false;
    } 
    

}
