package com.example.backend;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class VaccineCard {

    //Properties
    private boolean fullyVaccined;
    private String secondVaccineDate;

    public VaccineCard(){

    }

    public VaccineCard(boolean fullyVaccined, String secondVaccineDate){
        // TO DO: Change mechanism to get vaccine card information from e-devlet
        this.fullyVaccined = fullyVaccined;
        this.secondVaccineDate = secondVaccineDate;
    }
}
