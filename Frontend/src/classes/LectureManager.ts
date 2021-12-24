import Student from "./Student"
import User from "./User"
import Seat from "./Seat"
import Instructor from "./Instructor";
import Lecture from "./Lecture";
import {getDatabase, ref, push, set, get, query, orderByChild, equalTo} from "firebase/database";
import {getAuth} from "firebase/auth";


export default class LectureManager {

  // Properties
  private static instance: LectureManager | null = null;

  // Constructor
  private constructor() {}

  //Methods
  public static getInstance(): LectureManager {
    if(this.instance == null) {
      this.instance = new LectureManager();
    }
    return this.instance;
  }


  public async createCourse(lectureName: string, section:number, building:string, place: string) {
    const auth = getAuth();
    const Uid = auth.currentUser?.uid;
    const db = getDatabase();

    let instructor = (await get(ref(db, `Users/${Uid}`))).val();

    if(instructor){
      let ncourseCode = (Math.random() * 10000) + 1;
      let courseCode = ncourseCode.toString();
      let LID = (Math.random() * 10000) + 1;
      
      let lecture = new Lecture(instructor._name, lectureName, section, place, courseCode, -1, LID);

      await set(ref(db,`Users/${instructor._Uid}/Lectures/${lecture.LID}`),lecture); // Add lecture to instructor's lecture array
      await set(ref(db,`Lectures/${lecture.LID}`),lecture); // Add lecture to lecture storage
    }
  }


  public async generateLectureCode(LID:number){ 
    const db = getDatabase();

    let query1 = query(ref(db, `Lectures`),orderByChild('_LID'),equalTo(LID)); // Create query with lectures that has same LID value with given one
    let lecture = (await get(query1.ref)).val(); // Create lecture object with given reference

    let lectureCode = (Math.random() * 10000) + 1;
    set(ref(db, `/Lectures/_${lecture.LID}/_${lecture.lectureCode}`),lectureCode);
  }


  public async changeSeatStatus(phoneNumber: string) {
    const auth = getAuth();
    const Uid = auth.currentUser?.uid;
    const db = getDatabase();

    let instructor = (await get(ref(db, `UserGetByUID/${Uid}`))).val(); 

  }

   
  public async enrollStudentToCourse(courseCode: string){
    const auth = getAuth();
    const Uid = auth.currentUser?.uid;
    const db = getDatabase();

    let student = (await get(ref(db, `UserGetByUID/${Uid}`))).val();
    let query1 = query(ref(db, `Lectures`),orderByChild('courseCode'),equalTo(courseCode));
    let lecture = (await get(query1.ref)).val();

    set(ref(db, `Users/${student.Uid}/Lectures/${lecture.LID}/${lecture.lectureCode}`),lecture.lectureCode); 
    set(ref(db, `Lectures/${lecture.LID}/${lecture.lectureCode}`),lecture.lectureCode);
    return true;
  }


  public async setSeatOwner(UID: number, LID: number, SID: number){
    const auth = getAuth();
    const Uid = auth.currentUser?.uid;
    const db = getDatabase();

    let student = (await get(ref(db, `Users/${UID}`))).val(); //Get current student
    let lecture = (await get(ref(db, `Lectures/${LID}`))).val(); //Get current lecture

    // let query1 = query(ref(db, `Lectures/${LID}/SeatPlan/${lecture.}`)

  }
}

