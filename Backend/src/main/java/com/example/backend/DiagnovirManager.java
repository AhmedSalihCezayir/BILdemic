package com.example.backend;

public class DiagnovirManager {

    //Properties
    private static DiagnovirManager instance = null;

    //Constructor
    private DiagnovirManager(){}

    //Methods
    public static DiagnovirManager getInstance(){
        if(instance == null) {
            instance = new DiagnovirManager();
        }
        return instance;
    }

    public boolean takeReservation(User user, String date, String place, String time) {
        //TO DO
        return true;
    }

    public boolean cancelOrder(Diagnovir diagnovir){
        //TO DO
        return true;
    }

}
