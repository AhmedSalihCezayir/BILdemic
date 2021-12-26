package com.example.backend;

public class SportManager {

    //Properties
    private static SportManager instance = null;

    //Constructor
    private SportManager(){}

    //Methods
    public static SportManager getInstance(){
        if(instance == null) {
            instance = new SportManager();
        }
        return instance;
    }

    public boolean createSportRes(User user, String date, String place, String time) {
        //TO DO
        return true;
    }

    public boolean cancelOrder(SportActivity sportActivity){
        //TO DO
        return true;
    }
}
