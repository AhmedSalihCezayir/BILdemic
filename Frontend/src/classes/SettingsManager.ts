class SettingsManager {

    //Properties
    private static instance:SettingsManager | null = null;

    //Methods
    public static getInstance():SettingsManager{
        if(this.instance == null) {
            this.instance = new SettingsManager();
        }
        return this.instance;
    }

    public changeMail(user:User, mail:string):boolean {
        //TO DO
        return true;
    }

    public changePassword(user:User, password:string):boolean {
        //TO DO
        return true;
    }

    public changePhone(user:User, phoneNum:string):boolean {
        //TO DO
        return true;
    }

    public changeAddress(user:User, address:string):boolean {
        //TO DO
        return true;
    }

    public changeHES(user:User, hesCode:string):boolean {
        //TO DO
        return true;
    }

    public changeProfilePic(user:User, picURL:string):boolean {
        //TO DO
        return true;
    }


}
