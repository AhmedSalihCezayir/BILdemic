import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    sendEmailVerification, 
    signInWithEmailAndPassword, 
    signOut, Auth } from "firebase/auth";

import { getFirestore, collection, setDoc, addDoc, doc } from "firebase/firestore"; 
import { useRouter } from 'vue-router';
import CafeteriaStaff from "./CafeteriaStaff";
import DiagnovirTester from "./DiagnovirTester";
import HealthCenterStaff from "./HealthCenterStaff";
import Instructor from "./Instructor";
import SportStaff from "./SportStaff";
import Student from './Student'
    
export default class LoginManager {

    //Properties
    private static instance: LoginManager | null = null;
    public mAuth: Auth;
    //public CRUDManager crudManager;

    //Constructor
    private LoginManager() {
        this.mAuth = getAuth();
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
            const db = getFirestore();
            const crole = role + "s";
            const doc1 = doc(db, crole, userCredential.user.uid);

            

            if (role === "Student") {
                const student = new Student(name, mail, password, role, address, phoneNumber, hesCode, ID, resideInDorm, roomMateNames);
                
                await setDoc(doc1, Object.assign({}, student));
                return true;
            }
            else if (role === "Instructor") {
                const instructor = new Instructor(name, mail, password, role, address, phoneNumber, hesCode, ID, false, null);
                await setDoc(doc1, instructor);
                return true;
            }
            else if (role === "CafeteriaStaff") {
                const cafeteriaStaff = new CafeteriaStaff(name, mail, password, role, address, phoneNumber, hesCode);
                await setDoc(doc1, cafeteriaStaff);
                return true;
            }
            else if (role === "HealthCenterStaff") {
                const healthCenterStaff = new HealthCenterStaff(name, mail, password, role, address, phoneNumber, hesCode);
                await setDoc(doc1, healthCenterStaff);
                return true;
            }
            else if (role === "DiagnovirTester") {
                const diagnovirTester = new DiagnovirTester(name, mail, password, role, address, phoneNumber, hesCode);
                await setDoc(doc1, diagnovirTester);
                return true;
            }
            else if (role === "SportStaff") {
                const sportStaff = new SportStaff(name, mail, password, role, address, phoneNumber, hesCode);
                await setDoc(doc1, sportStaff);
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

    /**public mAuth:FirebaseAuth;
    //public CRUDManager crudManager;

    //Constructor
    private LoginManager() {
        this.mAuth = FirebaseAuth.getInstance();
    }

    //Methods
    public static LoginManager getInstance(){
        if(instance == null) {
            instance = new LoginManager();
        }
        return instance;
    }

    public static boolean createUser(String name, String mail, String password, String role, String address, String phoneNumber, String hesCode, int ID, boolean resideInDorm, String roomMateNames) throws InterruptedException, ExecutionException {
        if (role.equals("Student")) {
            Student student = new Student(name, mail, password, role, address, phoneNumber, hesCode, ID, resideInDorm, roomMateNames);
            CRUDManager.getInstance().createCRUD(student);
            return true;
        }
        else if (role.equals("Instructor")) {
            Instructor instructor = new Instructor(name, mail, password, role, address, phoneNumber, hesCode, ID, false, null);
            CRUDManager.getInstance().createCRUD(instructor);
            return true;
        }
        else if (role.equals("CafeteriaStaff")) {
            CafeteriaStaff cafeteriaStaff = new CafeteriaStaff(name, mail, password, role, address, phoneNumber, hesCode);
            CRUDManager.getInstance().createCRUD(cafeteriaStaff);
            return true;
        }
        else if (role.equals("HealthCenterStaff")) {
            HealthCenterStaff healthCenterStaff = new HealthCenterStaff(name, mail, password, role, address, phoneNumber, hesCode);
            CRUDManager.getInstance().createCRUD(healthCenterStaff);
            return true;
        }
        else if (role.equals("DiagnovirTester")) {
            DiagnovirTester diagnovirTester = new DiagnovirTester(name, mail, password, role, address, phoneNumber, hesCode);
            CRUDManager.getInstance().createCRUD(diagnovirTester);
            return true;
        }
        else if (role.equals("SportStaff")) {
            SportStaff sportStaff = new SportStaff(name, mail, password, role, address, phoneNumber, hesCode);
            CRUDManager.getInstance().createCRUD(sportStaff);
            return true;
        }
        else{
            return false;
        }
    }

    public static void sendCustomEmail(String email, String link) {}*/

}
