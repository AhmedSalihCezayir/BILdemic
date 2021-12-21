package com.example.backend;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class Diagnovir extends Order{

    private String result;

    public Diagnovir(String place, String time, String date, User owner, String result){
        super(place, date, time, owner,"Diagnovir");
        this.result = result;
    }
}
