import SportActivity from "./SportActivity";
import User from "./User";
import SportManager from './SportManager'


export default class SportStaff extends User{

    //Constructor
    public constructor(name:string, mail:string, password:string, role:string, address:string, phoneNum:string, hesCode:string){
        super(name, mail, password, role, address, phoneNum, hesCode);
    }

    //Methods
    public searchIndividual(ID:number):SportActivity | null{
        // TO DO
        return null;
    }
    public enterAbsenceStatus(ownerUID: string, OID:string){
        let sportManager = SportManager.getInstance();
        sportManager.changeAbsenceStatus(ownerUID, OID);
    }
}