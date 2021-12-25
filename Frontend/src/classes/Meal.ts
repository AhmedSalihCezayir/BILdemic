import { TouchSwipe } from "quasar";
import Order from "./Order";
import User from "./User";

export default class Meal extends Order{
    
    // Properties
    private _type: string;
    private _taken: boolean;
    
    // Constructors
    public constructor(place:string,  date:string, time:string, ownerUID:string, type:string){
        super(place, date, time, ownerUID, "Meal");
        this._type = type;
    }

    // Methods

    public get OID(): string {
        return this.OID;
    }
    public set OID(OID: string) {
        this.OID = OID;
    }
    public get type(): string {
        return this._type;
    }

    public set type(type: string) {
        this._type = type;
    }

    public get taken(): boolean {
        return this._taken;
    }

    public set taken(type: boolean) {
        this._taken = type;
    }
}

