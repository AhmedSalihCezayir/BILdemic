package com.example.backend;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class Meal extends Order{

    private String type;

    public Meal(String place,  String date, String time, User owner, String type){
        super(place, date, time, owner,"Meal");
        this.type = type;
    }
}
