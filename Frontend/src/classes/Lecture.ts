class Lecture {
  private _instructor: Instructor;
  private _lectureName: string;
  private _section: number;
  private _building: string;
  private _time: string;
  private _courseCode: string;
  private _lectureCode: number;
  private _lectureID: number;
  private _seatPlan: Seat[];
  private _attendanceRecord: Attendance[];

  public constructor(instructor: Instructor, lectureName: string, section: number, building: string, time: string, courseCode: string, lectureCode: number, lectureID: number, seatPlan: Seat[], attendanceRecord: Attendance[]){
    this._instructor = instructor;
    this._lectureName = lectureName;
    this._section = section;
    this._building = building;
    this._time = time;
    this._courseCode = courseCode;
    this._lectureCode = lectureCode;
    this._lectureID = lectureID;
    this._seatPlan = seatPlan;
    this._attendanceRecord = attendanceRecord;
  }

  public get instructor(): Instructor {
    return this._instructor;
  }

  public set instructor(value: Instructor) {
    this._instructor = value;
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

  public get building(): string {
    return this._building;
  }

  public set building(value: string) {
    this._building = value;
  }

  public get time(): string {
    return this._time;
  }

  public set time(value: string) {
    this._time = value;
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

  public get lectureID(): number {
    return this._lectureID;
  }

  public set lectureID(value: number) {
    this._lectureID = value;
  }

  public get seatPlan(): Seat[] {
    return this._seatPlan;
  }

  public set seatPlan(value: Seat[]) {
    this._seatPlan = value;
  }

  public get attendanceRecord(): Attendance[] {
    return this._attendanceRecord;
  }

  public set attendanceRecord(value: Attendance[]) {
    this._attendanceRecord = value;
  }
}