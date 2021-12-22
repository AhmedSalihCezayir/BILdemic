class Attendance {
  private _time: string;
  private _particularLectureSeatPlan: Seat[];
  private _lecture: Lecture;

  public get time(): string {
    return this._time;
  }

  public get particularLectureSeatPlan(): Seat[] {
    return this._particularLectureSeatPlan;
  }

  public get lecture(): Lecture {
    return this._lecture;
  }

  public set time(time: string) {
    this._time = time;
  }

  public set particularLectureSeatPlan(particularLectureSeatPlan: Seat[]) {
    this._particularLectureSeatPlan = particularLectureSeatPlan;
  }

  public set lecture(lecture: Lecture) {
    this._lecture = lecture;
  }
}