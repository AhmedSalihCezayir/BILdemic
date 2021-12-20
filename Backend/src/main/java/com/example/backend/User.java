package com.example.backend;

import lombok.Getter;
import lombok.Setter;

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
    private int phoneNum;


    //Constructor
    protected User(String name, String mail, String password,String role, String address, int phoneNum){
        this.name = name;
        this.mail = mail;
        this.password = password;
        this.role = role;
        this.address = address;
        this.phoneNum = phoneNum;
        this.profilePic = null;
    }
}
