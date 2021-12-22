class HealthCenterStaff extends User {
  
  public constructor(name: string, mail: string, password: string, role: string, address: string, phoneNum: string, hesCode: string){
        super(name, mail, password, role, address, phoneNum, hesCode);
    }

  public closeForm(healthForm: HealthForm): boolean {
    //TODO
    return true;
  }
}