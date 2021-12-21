package com.example.backend;

public class CafeteriaManager {

    //Properties
    private static CafeteriaManager instance = null;

    //Constructor
    private CafeteriaManager(){}

    //Methods
    public static CafeteriaManager getInstance(){
        if(instance == null) {
            instance = new CafeteriaManager();
        }
        return instance;
    }

    public boolean createMealOrder(String place, String date, String time, String type, User owner) {
        Meal meal = new Meal(place, time, date, owner, type);
        //TO DO: Add CRUD
        return true;
    }
}
