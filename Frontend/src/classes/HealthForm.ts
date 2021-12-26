import Order from './Order'
import User from './User'

export default class HealthForm extends Order {
  private _answerStatus: boolean;
  private _oldStatus: boolean;
  private _symptomsList: string[];

  public constructor(place: string, time: string, date: string, owner: string, answerStatus: boolean, oldStatus: boolean, symptomsList: string[], OID:string) {
    super(place, time, date, owner,"HealthForm");
      this._answerStatus = answerStatus;
      this._oldStatus = oldStatus;
      this._symptomsList = symptomsList;
  }

  public get answerStatus(): boolean {
    return this._answerStatus;
  }
  
  public set answerStatus(value: boolean) {
    this._answerStatus = value;
  }

  public get oldStatus(): boolean {
    return this._oldStatus;
  }
  
  public set oldStatus(value: boolean) {
    this._oldStatus = value;
  }

  public get symptomsList(): string[] {
    return this._symptomsList;
  }
  
  public set symptomsList(value: string[]) {
    this._symptomsList = value;
  }
}