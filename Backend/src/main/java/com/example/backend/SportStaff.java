package com.example.backend;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class SportStaff extends User{

    //Constructor
    public SportStaff(String name, String mail, String password, String role, String address, String phoneNum, String hesCode){
        super(name, mail, password, role, address, phoneNum, hesCode);
    }

    //Methods
    public SportActivity searchIndividual(int ID){
        // TO DO
        return null;
    }
    public boolean enterAbsenceStatus(SportActivity sportActivity){
        // TO DO
        return false;
    }
}
