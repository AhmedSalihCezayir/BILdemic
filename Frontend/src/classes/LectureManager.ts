import Student from "./Student"
import User from "./User"
import Seat from "./Seat"
import Instructor from "./Instructor";
import Lecture from "./Lecture";
import { getDatabase, ref, push, set, get, query, orderByChild, equalTo, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";

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
      
      let row, col, nSID, SID
      let seatColArray = []
      let seatPlan = []
      let counter = 1
      
      //SeatPlan Creation
      for(row = 0; row < 5; row = row + 1){
        for(col = 0; col < 5; col = col + 1){
          // Creating unique LID
          counter = counter + 1
          nSID = Date.now()
          nSID = nSID + counter
          SID = nSID.toString()
          const seat = new Seat(SID, "", "", "", false, 0, lectureName)
          seatColArray.push(seat) // Seat added to row
        }
        seatPlan.push(seatColArray) // New row added to seatplan
        seatColArray = [] // Array reseted
      } // SeatPlan is now a 5x5 array
      let lecture = new Lecture(instructor._name, lectureName, section, place, courseCode, -1, LID, seatPlan);
      await set(ref(db,`Users/${instructor._Uid}/Lectures/${lecture.LID}`),lecture); // Add lecture to instructor's lecture array
      await set(ref(db,`Lectures/${lecture.LID}`),lecture); // Add lecture to lecture storage
    }
  }

  //Generates random lecture code which shown at start of every lecture
  public async generateLectureCode(LID:number){ 
    const db = getDatabase();

    let lectureCode = Date.now();
    set(ref(db, `Lectures/${LID}/_lectureCode`), lectureCode);
  }

  //Gets lecture code of a lecture
  public getLectureCode(LID:number){ 
    const db = getDatabase();
    const reference = ref(db, `Lectures/${LID}/_lectureCode`);

    let lectureCode: string = "";
    onValue(reference, (snapshot) => {
        const data = snapshot.val();
        lectureCode = data;
    })
    return lectureCode;
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

    let query1 = query(ref(db, `Lectures`),orderByChild('courseCode'),equalTo(courseCode));
    let lecture = (await get(query1.ref)).val();
    console.log(lecture);

    await set(ref(db, `Users/${Uid}/Lectures/${lecture._LID}`),lecture); 
  }


  // This function is used to set seat's first owner
  public async setSeatOwner(UID: number, LID: number, row: number, col:number){
    const db = getDatabase();

    const reference = ref(db, `Lectures/${LID}/_seatPlan`); 

    let seatPlan: any[] = [];

    onValue(reference, (snapshot) => {
        const temp = snapshot.val();
        seatPlan = temp; 
    })

    let seat = seatPlan[row][col];
    seat.studentOwnerUID = UID;

    // Seat owner's right and left owner assigned
    if(col = 0){
      seatPlan[row][col+1].studentLeftUID = UID;
    }
    else if(col = 4){
      seatPlan[row][col-1].studentRightUID = UID;
    }
    else {
      seatPlan[row][col+1].studentLeftUID = UID;
      seatPlan[row][col-1].studentRightUID = UID;
    }
    
    //Seat updated
    seatPlan[row][col] = seat
    await set(ref(db, `Lectures/${LID}/_seatPlan`),seatPlan);
  }

  // This function get instructor's lectures and returns it in lecture array.
  public getInstructorlectures(UID:number){
    const db = getDatabase();
    const reference = ref(db, `Users/${UID}/Lectures/`);

    let lectures: any[] = [];
    onValue(reference, (snapshot) => {
        const data = snapshot.val();
        for (const [key, value] of Object.entries(data)) {
          lectures.push(value)
        }   
    })
    return lectures;
  }

  public getLecture(LID:number) {
    const db = getDatabase();
    const reference = ref(db, `Lectures/${LID}`); 

    let lecture;
    onValue(reference, (snapshot) => {
        const data = snapshot.val();
        lecture = data; 
    }) 
    console.log('here: ', lecture);
    return lecture;
  }

  //Checks lecture code and compares with real lecture code
  public controlLectureCode(LID:string, lectureCode: string){
    const db = getDatabase();
    let reference = ref(db, `Lectures/${LID}/_lectureCode`)
    let result = false;
    onValue(reference, (snapshot) => {
      const realLectureCode = snapshot.val();
      if(lectureCode = realLectureCode){
        result = true;
      }
    })
    return result;
  }

  
}

