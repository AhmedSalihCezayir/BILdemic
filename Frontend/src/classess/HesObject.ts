class HesObject {
  private _hesCode: string;
  private _hesStatus: boolean;
  private _lastHesCodeChangeDate: string;

  public constructor(hesCode: string, hesStatus: boolean, lastHesCodeChangeDate: string) {
    this._hesCode = hesCode;
    this._hesStatus = hesStatus;
    this._lastHesCodeChangeDate = lastHesCodeChangeDate;
  }
  
}