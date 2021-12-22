class Seat implements StudentObserver{

    // Properties
    private _studentOwner:Student | null = null;
    private _studentLeft:Student | null = null;
    private _studentRight:Student | null = null;
    private _confirm:boolean = false;
    private _ownerCovidStatus:CampusStatus | null = null;
    private _lecture:Lecture | null = null;

    // Methods
    public getOwnerCovStatus():CampusStatus | null{
        // This might create bugs. Check before using
        if(this._studentOwner != null)
        { 
            return this._studentOwner.campusStatus;
        }
        return null;
    }

    public get studentOwner(): Student | null {
        return this._studentOwner;
    }
    public set studentOwner(studentOwner: Student | null) {
        this._studentOwner = studentOwner;
    }
    
    public get studentLeft(): Student | null{
        return this._studentLeft;
    }
    public set studentLeft(studentLeft: Student | null) {
        this._studentLeft = studentLeft;
    }
    
    public get studentRight(): Student | null{
        return this._studentRight;
    }
    public set studentRight(studentRight: Student | null) {
        this._studentRight = studentRight;
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
