package com.example.backend;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class SportActivity extends Order{

    private String activity;
    private boolean absenceStatus;

    public SportActivity(String place, String time, String date, User owner, String activity, boolean absenceStatus){
        super(place, date, time, owner);
        this.activity = activity;
        this.absenceStatus = absenceStatus;
    }
}
