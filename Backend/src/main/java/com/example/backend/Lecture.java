package com.example.backend;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class Lecture {

    private Instructor instructor;
    private String lectureName;
    private int section;
    private String building;
    private String time;
    private String courseCode;
    private int lectureCode;
    private int lectureID;
    private Seat[] seatPlan;
    private Attendance[] attendanceRecord;

    public Lecture(Instructor instructor, String lectureName, int section, String building, String time, String courseCode, int lectureCode, int lectureID, Seat[] seatPlan, Attendance[] attendanceRecord){
        this.instructor = instructor;
        this.lectureName = lectureName;
        this.section = section;
        this.building = building;
        this.time = time;
        this.courseCode = courseCode;
        this.lectureCode = lectureCode;
        this.lectureID = lectureID;
        this.seatPlan = seatPlan;
        this.attendanceRecord = attendanceRecord;
    }

}
