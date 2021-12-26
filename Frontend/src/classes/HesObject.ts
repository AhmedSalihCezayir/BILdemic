export default class HesObject {
  private _hesCode: string;
  private _hesStatus: boolean;
  private _lastHesCodeChangeDate: string;

  public constructor(hesCode: string, hesStatus: boolean, lastHesCodeChangeDate: string) {
    this._hesCode = hesCode;
    this._hesStatus = hesStatus;
    this._lastHesCodeChangeDate = lastHesCodeChangeDate;
  }

  public get hesCode(): string {
    return this._hesCode;
  }

  public set hesCode(value: string) {
    this._hesCode = value;
  }

  public get hesStatus(): boolean {
    return this._hesStatus;
  }

  public set hesStatus(value: boolean) {
    this._hesStatus = value;
  }

  public get lastHesCodeChangeDate(): string {
    return this._lastHesCodeChangeDate;
  }
  
  public set lastHesCodeChangeDate(value: string) {
    this._lastHesCodeChangeDate = value;
  }
  
}