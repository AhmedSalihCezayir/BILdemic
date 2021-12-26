import Order from "./Order";
import User from "./User";

export default class SportActivity extends Order{

    // Properties
    private _participants: string[];
    private _activity:string = "";
    private _absenceStatus:boolean = false;

    // Constructor
    public constructor(place:string, time:string, date:string, ownerUID: string, participants: string[], activity:string){
        super(place, date, time, ownerUID, "SportActivity");
        this._participants = participants;
        this._activity = activity;
        this._absenceStatus = false;
    }

    // Methods
    public get OID(): string {
        return this.OID;
    }
    public set OID(OID: string) {
        this.OID = OID;
    }
    
    public get participants(): string[] {
        return this._participants;
    }

    public set participants(participants: string[]) {
        this._participants = participants;
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
