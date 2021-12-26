package com.example.backend;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class AmbulanceForm extends Order{

    public int phoneNum;

    public AmbulanceForm(String place, String time, String date, User owner, int phoneNumber){
        super(place, time, date, owner,"AmbulanceForm");
        this.phoneNum = phoneNumber;
    }
}
