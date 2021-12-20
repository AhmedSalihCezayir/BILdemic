package com.example.backend;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class Student extends User{

    //Properties
    private int ID;
    private boolean sportPunishStatus;
    private boolean resideInDorm;

    // LECTURES ARRAY EKLE

    //Constructor
    public Student(String name, String mail, String password, String role, String address, int ID, int phoneNumber, String hesCode, boolean resideInDorm, int dormNumber){
        super(name,mail,password,role,address,phoneNumber);
        this.ID = ID;

    }
}
