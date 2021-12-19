package com.example.backend;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public abstract class User {

    //Properties
    private String name;
    private String profilePic;
    private String mail;
    private String password;
    private String address;
    private int phoneNum;
    private String role;
    // HES OBJECT EKLE
}
