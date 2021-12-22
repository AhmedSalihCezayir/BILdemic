class Attendance {
  private _time: string = "";
  private _particularLectureSeatPlan: Seat[] | null = null;
  private _lecture: Lecture | null = null;

  public get time(): string {
    return this._time;
  }

  public get particularLectureSeatPlan(): Seat[] | null {
    return this._particularLectureSeatPlan;
  }

  public get lecture(): Lecture | null{
    return this._lecture;
  }

  public set time(time: string) {
    this._time = time;
  }

  public set particularLectureSeatPlan(particularLectureSeatPlan: Seat[] | null) {
    this._particularLectureSeatPlan = particularLectureSeatPlan;
  }

  public set lecture(lecture: Lecture | null) {
    this._lecture = lecture;
  }
}