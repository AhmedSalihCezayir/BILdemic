import HesObject from './HesObject'
import VaccineCard from './VaccineCard'
import Order from './Order'

export enum CampusStatus {
    CAMPUS_ALLOWED,
    CAMPUS_NOT_ALLOWED
}

export default abstract class User {

    //Properties
    private _name: string; 
    private _mail: string;
    private _password: string;
    private _role: string;
    private _address: string;
    private _profilePic: string;
    private _phoneNum: string;
    private _campusStatus: CampusStatus;
    private _hesObject: HesObject;
    private _vaccineCard: VaccineCard | null;
    private _Uid: string;
    private _orders: Order[] | null;
    

    //Constructor
    protected constructor(name:string, mail:string, password:string, role:string, address:string, phoneNum:string, hesCode:string ){
        this._name = name;
        this._mail = mail;
        this._password = password;
        this._role = role;
        this._address = address;
        this._phoneNum = phoneNum;
        this._profilePic = "";
        this._vaccineCard = null;
        this._Uid = "";
        this._orders = [];

        // Create hes object with given hes string and determine whether is campus allowed or not
        let hesObject = new HesObject(hesCode, true, "");
        this._hesObject = hesObject;
        if(this._hesObject.hesStatus == true)
            this._campusStatus = CampusStatus.CAMPUS_ALLOWED;
        else
            this._campusStatus = CampusStatus.CAMPUS_NOT_ALLOWED;
    }

    public get name(): string {
        return this._name;
    }
    public set name(name: string) {
        this._name = name;
    }

    public get mail(): string {
        return this._mail;
    }
    public set mail(mail: string) {
        this._mail = mail;
    }

    public get password(): string {
        return this._password;
    }
    public set password(password: string) {
        this._password = password;
    }

    public get role(): string {
        return this._role;
    }
    public set role(role: string) {
        this._role = role;
    }

    public get address(): string {
        return this._address;
    }
    public set address(address: string) {
        this._address = address;
    }

    public get profilePic(): string {
        return this._profilePic;
    }
    public set profilePic(profilePic: string) {
        this._profilePic = profilePic;
    }

    public get phoneNum(): string {
        return this._phoneNum;
    }
    public set phoneNum(phoneNum: string) {
        this._phoneNum = phoneNum;
    }
 
    public get campusStatus(): CampusStatus {
        return this._campusStatus;
    }
    public set campusStatus(campusStatus: CampusStatus) {
        this._campusStatus = campusStatus;
    }
 
    public get hesObject(): HesObject {
        return this._hesObject;
    }
    public set hesObject(hesObject: HesObject) {
        this._hesObject = hesObject;
    }
 
    public get vaccineCard(): VaccineCard | null {
        return this._vaccineCard;
    }
    public set vaccineCard(vaccineCard: VaccineCard | null) {
        this._vaccineCard = vaccineCard;
    }

    public get Uid(): string {
        return this._Uid;
    }
    public set Uid(Uid: string) {
        this._Uid = Uid;
    }

    public get orders(): Order[] | null {
        return this._orders;
    }
    public set orders(orders: Order[] | null) {
        this._orders = orders;
    }
}

