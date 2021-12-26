import Order from './Order'
import User from './User'

export default class Diagnovir extends Order {
  private _result: string;

  public constructor(place: string, time: string, date: string, owner: string, result: string) {
    super(place, date, time, owner, "Diagnovir");
    this._result = result;
  }

  public get result(): string {
    return this._result;
  }

  public set result(result: string) {
    this._result = result;
  }
}