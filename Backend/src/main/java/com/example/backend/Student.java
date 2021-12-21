package com.example.backend;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
public class Student extends User{

    //Properties
    private int ID;
    private boolean sportPunishStatus;
    private boolean resideInDorm;
    private Lecture[] lectures;
    private List roomMateNames;

    //Constructor
    public Student(String name, String mail, String password, String role, String address,  String phoneNumber, String hesCode, int ID, boolean resideInDorm, List roomMateNames){
        super(name,mail,password,role,address,phoneNumber,hesCode);
        this.ID = ID;
        this.resideInDorm = resideInDorm;
        this.roomMateNames = roomMateNames;
    }

    //Methods
    public boolean enrollCourse(String courseCode){
        //TO DO
        return false;
    }

    public boolean selectSeatFirst(String courseCode, Seat seat){
        //TO DO
        return false;
    }

    public boolean confirmNeighbourSeat(String courseCode, Student leftNeighbour, Student rightNeighbour){
        //TO DO
        return false;
    }

    public boolean enterLectureCode(String lectureCode){
        return false;
    }

}
