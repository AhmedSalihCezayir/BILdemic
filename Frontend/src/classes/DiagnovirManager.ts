import User from './User'
import Diagnovir from './Diagnovir'

export default class DiagnovirManager {
  private static instance: DiagnovirManager | null = null;

  private constructor() {

  }

  public static getInstance(): DiagnovirManager {
    if(this.instance == null) {
        this.instance = new DiagnovirManager();
    }
    return this.instance;
  }

  public takeReservation(user: User, date: string, place: string, time: string): boolean {
    //TO DO
    return true;
  }

  public cancelOrder(diagnovir: Diagnovir): boolean {
    //TO DO
    return true;
  }
}