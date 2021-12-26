package com.example.backend;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class Attendance {

    private String time;
    private Seat[] particularLectureSeatPlan;
    private Lecture lecture;
}
