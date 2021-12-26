import User from "./User";

export enum OrderType{
    AMBULANCE_FORM,
    HEALTH_FORM,
    MEAL,
    SPORT_ACTIVITY,
    DIAGNOVIR
}

export default abstract class Order {
    
    //Properties
    public _OID: string;
    private _place:string;
    private _time:string;
    private _date:string;
    private _ownerUID:string;
    private _orderType:OrderType;
    
    //Constructor
    protected constructor(place:string, date:string, time:string, ownerUID:string, orderType:string){
        let nOID = Date.now();
        this._OID = nOID.toString();
        this._place = place;
        this._time = time; 
        this._date = date;
        this._ownerUID = ownerUID;

        if(orderType === "AmbulanceForm"){
            this._orderType = OrderType.AMBULANCE_FORM;
        }
        else if(orderType === "HealthForm"){
            this._orderType = OrderType.HEALTH_FORM;
        }
        else if(orderType === "Meal"){
            this._orderType = OrderType.MEAL;
        }
        else if(orderType === "SportActivity"){
            this._orderType = OrderType.SPORT_ACTIVITY;
        }
        else{
            this._orderType = OrderType.DIAGNOVIR;
        }
    }

    // Methods
    public get OID(): string {
        return this._OID;
    }

    public set OID(OID: string) {
        this._OID = OID;
    }

    public get place(): string {
        return this._place;
    }
    public set place(place: string) {
        this._place = place;
    }
    
    public get time(): string {
        return this._time;
    }
    public set time(time: string) {
        this._time = time;
    }
    
    public get date(): string {
        return this._date;
    }
    public set date(date: string) {
        this._date = date;
    }
    
    public get ownerUID(): string {
        return this._ownerUID;
    }
    public set ownerUID(ownerUID: string) {
        this._ownerUID = ownerUID;
    }
    
    public get orderType(): OrderType {
        return this._orderType;
    }

    public set orderType(orderType: OrderType) {
        this._orderType = orderType;
    }

}
