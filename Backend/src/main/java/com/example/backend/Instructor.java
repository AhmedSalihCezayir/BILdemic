package com.example.backend;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class Instructor extends User{

    //Properties
    private int ID;
    private boolean sportPunishStatus;
    private Lecture[] lectures;

    //Constructor
    public Instructor(String name, String mail, String password, String role, String address, String phoneNumber, String hesCode, int ID, boolean sportPunishStatus, Lecture[] lectures){
        super(name,mail,password,role,address,phoneNumber,hesCode);
        this.ID = ID;
        this.sportPunishStatus = sportPunishStatus;
        this.lectures = lectures;
    }

    //Methods
    public boolean registerLecture(String lectureName, int section, String building, String courseCode, String time){
        // TO DO: Call related method in lecture manager
        return true;
    }

    public boolean generateLectureCode(){
        // TO DO: Call related method in lecture manager
        return false;
    }

    public boolean confirmParticularSeat(Seat seat){
        // TO DO: Call related method in lecture manager
        return false;
    }

    public boolean declineParticularSeat(Seat seat){
        // TO DO: Call related method in lecture manager
        return false;
    }

    public boolean getClassCovidStatus(Lecture lecture){
        // TO DO: Call related method in lecture manager
        return false;
    }

}
