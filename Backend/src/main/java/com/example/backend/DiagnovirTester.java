package com.example.backend;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class DiagnovirTester extends User{

    //Constructor
    public DiagnovirTester(String name, String mail, String password, String role, String address, String phoneNum, String hesCode){
        super(name, mail, password, role, address, phoneNum, hesCode);
    }

}
