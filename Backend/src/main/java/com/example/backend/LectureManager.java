package com.example.backend;

public class LectureManager {

    //Properties
    private static LectureManager instance = null;

    //Constructor
    private LectureManager(){}

    //Methods
    public static LectureManager getInstance(){
        if(instance == null) {
            instance = new LectureManager();
        }
        return instance;
    }

    public boolean createCourse(User user, String date, String place, String time) {
        //TO DO
        return true;
    }

    public boolean changeSeatStatus(String phoneNumber){
        //TO DO
        return true;
    }

    public boolean enrollStudentToCourse(String courseCode, Student student){
        //TO DO
        return true;
    }

    public boolean setSeatOwner(Seat seat, Student student){
        //TO DO
        return true;
    }

}
