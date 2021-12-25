import Meal from './Meal';
import User from './User'

export default class CafeteriaManager {
  private static instance: CafeteriaManager | null = null;

  private constructor() {

  }

  public static getInstance(): CafeteriaManager {
    if (this.instance == null) {
      this.instance = new CafeteriaManager();
    }
    return this.instance;
  }

  public createMealOrder(place: string, date: string, time: string, type: string, owner: string, OID:string): boolean {
        let meal = new Meal(place, time, date, owner, type, OID);
        //TO DO: Add CRUD
        return true;
    }
}