class SportStaff extends User{

    //Constructor
    public constructor(name:string, mail:string, password:string, role:string, address:string, phoneNum:string, hesCode:string){
        super(name, mail, password, role, address, phoneNum, hesCode);
    }

    //Methods
    public searchIndividual(ID:number):SportActivity | null{
        // TO DO
        return null;
    }
    public enterAbsenceStatus(sportActivity:SportActivity):boolean{
        // TO DO
        return false;
    }
}