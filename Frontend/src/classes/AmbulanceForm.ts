import Order from './Order'
import User from './User'

export default class AmbulanceForm extends Order {
  private _phoneNum: number;

  public constructor(place: string, time: string, date: string, owner: User, phoneNumber: number) {
    super(place, time, date, owner, "AmbulanceForm");

    this._phoneNum = phoneNumber;
  }

  public get phoneNum(): number {
    return this._phoneNum;
  }

  public set phoneNum(phoneNum: number) {
    this._phoneNum = phoneNum;
  }
}