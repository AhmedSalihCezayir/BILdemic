import Attendance from "./Attendance"
import Instructor from "./Instructor"
import Seat from "./Seat"

export default class Lecture {
  private _instructorName: string;
  private _lectureName: string;
  private _section: number;
  private _place: string;
  private _courseCode: string;
  private _lectureCode: number;
  private _LID: number;
  private _seatPlan: Seat[][] | null;
  private _attendanceRecord: Attendance[] | null;
  private _selected: boolean;

  public constructor(instructorName: string, lectureName: string, section: number, place: string, courseCode: string, lectureCode: number, LID: number, seatPlan: Seat[][]){
    this._instructorName = instructorName;
    this._lectureName = lectureName;
    this._section = section;
    this._place = place;
    this._courseCode = courseCode;
    this._lectureCode = lectureCode;
    this._LID = LID;
    this._seatPlan = seatPlan;
    this._attendanceRecord = null;
    this._selected = false;
  }

  public get instructorName(): string{
    return this._instructorName;
  }

  public set instructorName(value: string) {
    this._instructorName = value;
  }
  
  public get lectureName(): string {
    return this._lectureName;
  }

  public set lectureName(value: string) {
    this._lectureName = value;
  }

  public get section(): number {
    return this._section;
  }

  public set section(value: number) {
    this._section = value;
  }

  public get place(): string {
    return this._place;
  }

  public set place(value: string) {
    this._place = value;
  }

  public get courseCode(): string {
    return this._courseCode;
  }

  public set courseCode(value: string) {
    this._courseCode = value;
  }

  public get lectureCode(): number {
    return this._lectureCode;
  }

  public set lectureCode(value: number) {
    this._lectureCode = value;
  }

  public get LID(): number {
    return this._LID;
  }

  public set LID(value: number) {
    this._LID = value;
  }

  public get selected(): boolean {
    return this._selected;
  }

  public set selected(value: boolean) {
    this._selected = value;
  }


  public get seatPlan(): Seat[][] | null {
    return this._seatPlan;
  }

  public set seatPlan(value: Seat[][] | null) {
    this._seatPlan = value;
  }

  public get attendanceRecord(): Attendance[] | null{
    return this._attendanceRecord;
  }

  public set attendanceRecord(value: Attendance[] | null) {
    this._attendanceRecord = value;
  }

}