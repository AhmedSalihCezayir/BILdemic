import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    sendEmailVerification, 
    signInWithEmailAndPassword, 
    signOut,
    sendPasswordResetEmail } from "firebase/auth";

import { getDatabase, ref, set } from "firebase/database";

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
            }
            const db = getDatabase();
            const crole = role.replace(/ /g, "") + "s";

            if (role === "Student") {
                const student = new Student(name, mail, password, role, address, phoneNumber, hesCode, ID, resideInDorm, roomMateNames);
                set(ref(db, `Users/${crole}/${userCredential.user.uid}`), student);
            }
            else if (role === "Instructor") {
                const instructor = new Instructor(name, mail, password, role, address, phoneNumber, hesCode, ID, false, null);
                set(ref(db, `Users/${crole}/${userCredential.user.uid}`), instructor);
            }
            else if (role === "Cafeteria Staff") {
                const cafeteriaStaff = new CafeteriaStaff(name, mail, password, role, address, phoneNumber, hesCode);
                set(ref(db, `Users/${crole}/${userCredential.user.uid}`), cafeteriaStaff);
            }
            else if (role === "Health Center Staff") {
                const healthCenterStaff = new HealthCenterStaff(name, mail, password, role, address, phoneNumber, hesCode);
                set(ref(db, `Users/${crole}/${userCredential.user.uid}`), healthCenterStaff);
            }
            else if (role === "Diagnovir Tester") {
                const diagnovirTester = new DiagnovirTester(name, mail, password, role, address, phoneNumber, hesCode);
                set(ref(db, `Users/${crole}/${userCredential.user.uid}`), diagnovirTester);
            }
            else if (role === "Sports Center Staff") {
                const sportStaff = new SportStaff(name, mail, password, role, address, phoneNumber, hesCode);
                set(ref(db, `Users/${crole}/${userCredential.user.uid}`), sportStaff);
            }
    })
    .catch((error) => {
        console.log(error.message);
    });
    } 

    public async logout() {  
        await signOut(getAuth());
    }
    
    public async signIn (email: string, password: string) {
        await signInWithEmailAndPassword(getAuth(), email, password);
    }

    public async resetPassword(email: string) {
        await sendPasswordResetEmail(getAuth(), email);
    }
}