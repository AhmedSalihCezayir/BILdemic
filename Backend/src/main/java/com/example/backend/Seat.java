package com.example.backend;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class Seat implements StudentObserver{

    // Properties
    private Student studentOwner;
    private Student studentLeft;
    private Student studentRight;
    private boolean confirm;
    private Enum ownerCovidStatus;
    private Lecture lecture;

    // Methods
    public Enum getOwnerCovStatus(){
        return studentOwner.getCampusStatus();
    }
}
