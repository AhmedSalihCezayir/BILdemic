package com.example.backend;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class HesObject {

    // Properites
    private String hesCode;
    private boolean hesStatus;
    private String lastHesCodeChangeDate;

    public HesObject(){

    }

    public HesObject(String hesCode, boolean hesStatus, String lastHesCodeChangeDate){
        this.hesCode = hesCode;
        this.hesStatus = hesStatus;
        this.lastHesCodeChangeDate = lastHesCodeChangeDate;
    }

}
