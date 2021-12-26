package com.example.backend;

public class SettingsManager {

    //Properties
    private static SettingsManager instance = null;

    //Constructor
    private SettingsManager(){}

    //Methods
    public static SettingsManager getInstance(){
        if(instance == null) {
            instance = new SettingsManager();
        }
        return instance;
    }

    public boolean changeMail(User user, String mail) {
        //TO DO
        return true;
    }

    public boolean changePassword(User user, String password) {
        //TO DO
        return true;
    }

    public boolean changePhone(User user, String phoneNum) {
        //TO DO
        return true;
    }

    public boolean changeAddress(User user, String address) {
        //TO DO
        return true;
    }

    public boolean changeHES(User user, String hesCode) {
        //TO DO
        return true;
    }

    public boolean changeProfilePic(User user, String picURL) {
        //TO DO
        return true;
    }


}
