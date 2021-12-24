import Student from "./Student"
import User from "./User"
import Seat from "./Seat"
import Instructor from "./Instructor";
import Lecture from "./Lecture";
import {getDatabase, ref, push, set, get, query, orderByChild, equalTo} from "firebase/database";
import {getAuth} from "firebase/auth";
import { Loading } from "quasar";


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

  //Create courses with given parameters
  public async createCourse(lectureName: string, section:number, building:string, place: string) {
    const auth = getAuth();
    const Uid = auth.currentUser?.uid;
    const db = getDatabase();

    let instructor = (await get(ref(db, `Users/${Uid}`))).val();

    if(instructor){
      let courseCode = (instructor._name.replace(/ /g, "").substring(0,5) + building + section).toLowerCase();
      let LID = Date.now();
      
      let lecture = new Lecture(instructor._name, lectureName, section, place, courseCode, -1, LID);

      await set(ref(db,`Users/${instructor._Uid}/Lectures/${lecture.LID}`),lecture); // Add lecture to instructor's lecture array
      await set(ref(db,`Lectures/${lecture.LID}`),lecture); // Add lecture to lecture storage
    }
  }

  //Generates random lecture code which shown at start of every lecture
  public async generateLectureCode(LID:number){ 
    const db = getDatabase();

    let query1 = query(ref(db, `Lectures`),orderByChild('_LID'),equalTo(LID)); // Create query with lectures that has same LID value with given one
    let lecture = (await get(query1.ref)).val(); // Create lecture object with given reference

    let lectureCode = (Math.random() * 10000) + 1;
    set(ref(db, `/Lectures/_${lecture.LID}/_${lecture.lectureCode}`),lectureCode);
  }

  //This function is used to change status of a particular seat from teacher
  public async changeSeatStatus(LID: number, AID: number, SID: number, confirm: boolean) {
    const db = getDatabase();
    
    let attendance = (await get(ref(db,`Lectures/${LID}/Attendances/${AID}`))).val(); // Get attendance object to reach seat plan in it
    let seat = (await get(ref(db,`Lectures/${LID}/Attendances/${AID}/${attendance._particularLectureSeatPlan}/${SID}`))).val(); // Get particular seat 
    await set(ref(db,`Lectures/${LID}/SeatPlan/${SID}/${seat._confirm}`), confirm); // Change particular seat's confirm property
  }

  // This function is used to enroll student to a course
  public async enrollStudentToCourse(courseCode: string){
    const auth = getAuth();
    const Uid = auth.currentUser?.uid;
    const db = getDatabase();

    let student = (await get(ref(db, `UserGetByUID/${Uid}`))).val();
    let query1 = query(ref(db, `Lectures`),orderByChild('courseCode'),equalTo(courseCode));
    let lecture = (await get(query1.ref)).val();

    await set(ref(db, `Users/${student.Uid}/Lectures/${lecture.LID}/${lecture.lectureCode}`),lecture.lectureCode); 
    await set(ref(db, `Lectures/${lecture.LID}/${lecture.lectureCode}`),lecture.lectureCode);
  }


  // This function is used to set seat's first owner
  public async setSeatOwner(UID: number, LID: number, SID: number){
    const db = getDatabase();

    let seat = (await get(ref(db,`Lectures/${LID}/SeatPlan/${SID}`))).val(); 
    await set(ref(db,`Lectures/${LID}/SeatPlan/${SID}/${seat._studentOwnerUID}`),UID); 
  }

  // This function get instructor's lectures and returns it in lecture array.
  public async getInstructorlectures(UID:number,lecture: Lecture[]){
    const db = getDatabase();

    let instructor = (await get(ref(db, `Users/${UID}`))).val();
    let query1 = query(ref(db,`Users/${UID}/Lectures`), orderByChild('UID'));
    lecture = (await get(query1.ref)).val();

  }
}

