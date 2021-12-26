import Order from "./Order";
import User from "./User";

export default class SportActivity extends Order{

    private _activity:string = "";
    private _absenceStatus:boolean = false;

    public constructor(place:string, time:string, date:string, owner:string, activity:string, absenceStatus:boolean, OID:string){
        super(place, date, time, owner, "SportActivity");
        this._activity = activity;
        this._absenceStatus = absenceStatus;
    }

    public get activity(): string {
        return this._activity;
    }
    public set activity(activity: string) {
        this._activity = activity;
    }

    public get absenceStatus(): boolean {
        return this._absenceStatus;
    }
    public set absenceStatus(absenceStatus: boolean) {
        this._absenceStatus = absenceStatus;
    }

}
