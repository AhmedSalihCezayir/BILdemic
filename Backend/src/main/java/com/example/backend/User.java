package com.example.backend;

import lombok.Getter;
import lombok.Setter;

import static com.example.backend.CampusStatus.CAMPUS_ALLOWED;
import static com.example.backend.CampusStatus.CAMPUS_NOT_ALLOWED;

enum CampusStatus {
    CAMPUS_ALLOWED,
    CAMPUS_NOT_ALLOWED
}

@Getter
@Setter
public abstract class User {

    //Properties
    private String name;
    private String mail;
    private String password;
    private String role;
    private String address;
    private String profilePic;
    private String phoneNum;
    private CampusStatus campusStatus;
    private HesObject hesObject;
    private VaccineCard vaccineCard;
    private String Uid;
    private Order[] orders;

    //Constructor
    protected User(String name, String mail, String password, String role, String address, String phoneNum, String hesCode){
        this.name = name;
        this.mail = mail;
        this.password = password;
        this.role = role;
        this.address = address;
        this.phoneNum = phoneNum;
        this.profilePic = null;
        this.vaccineCard = null;
        this.Uid = null;
        this.orders = null;

        // Create hes object with given hes string and determine whether is campus allowed or not
        HesObject hesObject = new HesObject(hesCode,true,null);
        this.hesObject = hesObject;
        if(hesObject.isHesStatus() == true)
            this.campusStatus = CAMPUS_ALLOWED;
        else
            this.campusStatus = CAMPUS_NOT_ALLOWED;
    }
}

