package com.example.backend;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class HealthForm extends Order{

    private boolean answerStatus;
    private boolean oldStatus;
    private String[] symptomsList;

    public HealthForm(String place, String time, String date, User owner, boolean answerStatus, boolean oldStatus, String[] symptomsList){
        super(place, time, date, owner,"HealthForm");
        this.answerStatus = answerStatus;
        this.oldStatus = oldStatus;
        this.symptomsList = symptomsList;
    }
}
