class Seat implements StudentObserver{

    // Properties
    private _studentOwner:Student;
    private _studentLeft:Student;
    private _studentRight:Student;
    private _confirm:boolean;
    private _ownerCovidStatus:CampusStatus;
    private _lecture:Lecture;

    // Methods
    public getOwnerCovStatus():CampusStatus{
        // This might create bugs. Check before using
        return this._studentOwner.campusStatus;
    }

    public get studentOwner(): Student {
        return this._studentOwner;
    }
    public set studentOwner(studentOwner: Student) {
        this._studentOwner = studentOwner;
    }
    
    public get studentLeft(): Student {
        return this._studentLeft;
    }
    public set studentLeft(studentLeft: Student) {
        this._studentLeft = studentLeft;
    }
    
    public get studentRight(): Student {
        return this._studentRight;
    }
    public set studentRight(studentRight: Student) {
        this._studentRight = studentRight;
    }
    
    public get confirm(): boolean {
        return this._confirm;
    }
    public set confirm(confirm: boolean) {
        this._confirm = confirm;
    }
    
    public get ownerCovidStatus(): CampusStatus {
        return this._ownerCovidStatus;
    }
    public set ownerCovidStatus(ownerCovidStatus: CampusStatus) {
        this._ownerCovidStatus = ownerCovidStatus;
    }
    
    public get lecture(): Lecture {
        return this._lecture;
    }
    public set lecture(lecture: Lecture) {
        this._lecture = lecture;
    }
}
