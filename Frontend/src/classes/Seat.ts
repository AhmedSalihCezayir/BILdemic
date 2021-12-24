import Lecture from "./Lecture";
import Student from "./Student";
import StudentObserver from "./StudentObserver";
import { CampusStatus } from "./User";

export default class Seat implements StudentObserver{

    // Properties
    private _SID: string;
    private _studentOwnerUID:string;
    private _studentLeftUID:string;
    private _studentRightUID:string;
    private _confirm:boolean = false;
    private _ownerCovidStatus:CampusStatus | null = null;
    private _lecture:Lecture | null = null;

    // Constructors
    public constructor(){}

    // Methods
    //public getOwnerCovStatus():CampusStatus | null{
        // This might create bugs. Check before using
    //    if(this._studentOwnerUID != "")
    //    { 
    //        return this._studentOwnerUID.campusStatus;
    //    }
    //    return null;
    //}

    public get SID(): string {
        return this._SID;
    }

    public set SID(SID:string){
        this._SID = SID;
    }

    public get studentOwnerUID(): string{
        return this._studentOwnerUID;
    }

    public set studentOwnerUID(studentOwnerUID: string) {
        this._studentOwnerUID = studentOwnerUID;
    }
    
    public get studentLeftUID(): string{
        return this._studentLeftUID;
    }
    public set studentLeftUID(studentLeftUID: string) {
        this._studentLeftUID = studentLeftUID;
    }
    
    public get studentRightUID(): string{
        return this._studentRightUID;
    }
    public set studentRight(studentRightUID: string) {
        this._studentRightUID = studentRightUID;
    }
    
    public get confirm(): boolean {
        return this._confirm;
    }
    public set confirm(confirm: boolean) {
        this._confirm = confirm;
    }
    
    public get ownerCovidStatus(): CampusStatus | null {
        return this._ownerCovidStatus;
    }

    public set ownerCovidStatus(ownerCovidStatus: CampusStatus | null) {
        this._ownerCovidStatus = ownerCovidStatus;
    }
    
    public get lecture(): Lecture | null {
        return this._lecture;
    }

    public set lecture(lecture: Lecture | null) {
        this._lecture = lecture;
    }
}
