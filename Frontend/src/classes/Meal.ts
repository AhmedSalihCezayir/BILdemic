import Order from "./Order";
import User from "./User";

export default class Meal extends Order{

    private _type: string;

    public constructor(place:string,  date:string, time:string, owner:User, type:string){
        super(place, date, time, owner,"Meal");
        this._type = type;
    }

    public get type(): string {
        return this._type;
    }
    public set type(type: string) {
        this._type = type;
    }
}
