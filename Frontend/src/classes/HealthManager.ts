import HealthForm from "./HealthForm";
import User from "./User";

export default class HealthManager {
    private static instance: HealthManager | null = null;

    private constructor() {

    }

    public static getInstance(): HealthManager {
        if(this.instance == null) {
            this.instance = new HealthManager();
        }
        return this.instance;
    }

    public createForm(user: User, date: string, place: string, time: string): boolean {
        //TO DO
        return true;
    }

    public ambulanceCall(phoneNumber: string): boolean {
        //TO DO
        return true;
    }

    public cancelOrder(healthForm: HealthForm): boolean {
        //TO DO
        return true;
    }
}