import Student from "./Student"
import User from "./User"
import Seat from "./Seat"

export default class LectureManager {

  // Properties
  private static instance: LectureManager | null = null;

  // Constructor
  private constructor() {

  }

  //Methods
  public static getInstance(): LectureManager {
    if(this.instance == null) {
      this.instance = new LectureManager();
    }
    return this.instance;
  }

  public createCourse(user: User, date: string, place: string, time: string): boolean {
    //TO DO
    return true;
  }

  public changeSeatStatus(phoneNumber: string): boolean {
    //TO DO
    return true;
  }

  public enrollStudentToCourse(courseCode: string, student: Student): boolean{
    //TO DO
    return true;
  }

  public setSeatOwner(seat: Seat, student: Student): boolean {
    //TO DO
    return true;
  }
}