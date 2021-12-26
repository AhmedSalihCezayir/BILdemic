package com.example.backend;

public class HealthManager {

    //Properties
    private static HealthManager instance = null;

    //Constructor
    private HealthManager(){}

    //Methods
    public static HealthManager getInstance(){
        if(instance == null) {
            instance = new HealthManager();
        }
        return instance;
    }

    public boolean createForm(User user, String date, String place, String time) {
        //TO DO
        return true;
    }

    public boolean ambulanceCall(String phoneNumber){
        //TO DO
        return true;
    }

    public boolean cancelOrder(HealthForm healthForm){
        //TO DO
        return true;
    }

}
