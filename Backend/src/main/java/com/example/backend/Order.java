package com.example.backend;

import lombok.Getter;
import lombok.Setter;

import static com.example.backend.OrderType.AMBULANCE_FORM;
import static com.example.backend.OrderType.HEALTH_FORM;
import static com.example.backend.OrderType.MEAL;
import static com.example.backend.OrderType.SPORT_ACTIVITY;
import static com.example.backend.OrderType.DIAGNOVIR;

enum OrderType{
    AMBULANCE_FORM,
    HEALTH_FORM,
    MEAL,
    SPORT_ACTIVITY,
    DIAGNOVIR
}

@Setter
@Getter
public abstract class Order {

    private String place;
    private String time;
    private String date;
    private User owner;
    private OrderType orderType;

    protected Order(String place, String date, String time, User owner, String orderType){
        this.place = place;
        this.time = time;
        this.date = date;
        this.owner = owner;

        if(orderType.equals("AmbulanceForm")){
            this.orderType = AMBULANCE_FORM;
        }
        else if(orderType.equals("HealthForm")){
            this.orderType = HEALTH_FORM;
        }
        else if(orderType.equals("Meal")){
            this.orderType = MEAL;
        }
        else if(orderType.equals("SportActivity")){
            this.orderType = SPORT_ACTIVITY;
        }
        else{
            this.orderType = DIAGNOVIR;
        }
    }
}
