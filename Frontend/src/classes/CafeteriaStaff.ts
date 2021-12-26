import User from './User'
import Meal from './Meal'
import CafeteriaManager from './CafeteriaManager'

export default class CafeteriaStaff extends User {
  
  //Constructor
  public constructor(name: string, mail: string, password: string, role: string, address: string, phoneNumber: string, hesCode: string) {
    super(name,mail,password,role,address,phoneNumber,hesCode);
  }

  //Methods
  public showTotalInfo(){
    let cm = CafeteriaManager.getInstance();
    cm.seeTotalOrders();
  }

  public ShowRegInfo(region: string){
    let cm = CafeteriaManager.getInstance();
    cm.seeRegionalOrders(region);
  }

  public enterTakenStatus(UID:string, OID: string){
    let cm = CafeteriaManager.getInstance();
    cm.changeTakenStatus(UID, OID);
  }

}