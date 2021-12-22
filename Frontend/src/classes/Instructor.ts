import User from "./User"
import Lecture from "./Lecture"
import Seat from "./Seat"

export default class Instructor extends User {

  //Properties
  private _ID: number;
  private _sportPunishStatus: boolean;
  private _lectures: Lecture[] | null;

  //Constructor
  public constructor(name: string, mail: string, password: string, role: string, address: string, phoneNumber: string, hesCode: string, ID: number, sportPunishStatus: boolean, lectures: Lecture[] | null) {
    super(name,mail,password,role,address,phoneNumber,hesCode);
        this._ID = ID;
        this._sportPunishStatus = sportPunishStatus;
        this._lectures = lectures;
  }

  //Methods
  public registerLecture(lectureName: string, section: number, building: string, courseCode: string, time: string): boolean{
    // TO DO: Call related method in lecture manager
    return true;
  }

  public generateLectureCode(): boolean{
    // TO DO: Call related method in lecture manager
    return false;
  }

  public confirmParticularSeat(seat: Seat): boolean {
    // TO DO: Call related method in lecture manager
    return false;
  }

  public declineParticularSeat(seat: Seat): boolean {
    // TO DO: Call related method in lecture manager
    return false;
  }

  public getClassCovidStatus(lecture: Lecture): boolean{
    // TO DO: Call related method in lecture manager
    return false;
  }

  public get ID(): number {
    return this._ID;
  }

  public set ID(value: number) {
    this._ID = value;
  }

  public get sportPunishStatus(): boolean {
    return this._sportPunishStatus;
  }
  
  public set sportPunishStatus(value: boolean) {
    this._sportPunishStatus = value;
  }

  public get lectures(): Lecture[] | null{
    return this._lectures;
  }

  public set lectures(value: Lecture[] | null) {
    this._lectures = value;
  }
}