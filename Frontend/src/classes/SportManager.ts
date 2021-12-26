import SportActivity from "./SportActivity";
import User from "./User";

export default class SportManager {

    //Properties
    private static instance: SportManager | null = null;

    //Methods
    public static getInstance():SportManager{
        if(this.instance == null) {
            this.instance = new SportManager();
        }
        return this.instance;
    }

    public createSportRes(user:User, date:string, place:string, time:string):boolean {
        //TO DO
        return true;
    }

    public cancelOrder(sportActivity:SportActivity):boolean{
        //TO DO
        return true;
    }
}
