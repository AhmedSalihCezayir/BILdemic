package com.example.backend;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public abstract class Order {

    private String place;
    private String time;
    private String date;
    private User owner;

    protected Order(String place, String date, String type, User owner){
        this.place = place;
        this.time = time;
        this.date=date;
        this.owner = owner;
    }
}
