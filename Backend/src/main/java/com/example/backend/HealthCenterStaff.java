package com.example.backend;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class HealthCenterStaff extends User{


    //Constructor
    public HealthCenterStaff(String name, String mail, String password, String role, String address, String phoneNum, String hesCode){
        super(name, mail, password, role, address, phoneNum, hesCode);
    }

    //Methods
    public boolean closeForm(HealthForm healthForm){
        // TO DO
        return true;
    }
}
