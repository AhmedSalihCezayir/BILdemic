import User from './User'
import Meal from './Meal'

export default class CafeteriaStaff extends User {

  public constructor(name: string, mail: string, password: string, role: string, address: string, phoneNumber: string, hesCode: string) {
    super(name,mail,password,role,address,phoneNumber,hesCode);
  }

  public showTotalInfo(): string{
        return "";
  }

  public ShowRegInfo(region: string): string {
    return "";
  }

  public searchIndividualInfo(ID: number): boolean{
    return false;
  }

  public enterTakenStatus(meal: Meal){

  }

}