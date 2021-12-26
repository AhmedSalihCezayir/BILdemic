package com.example.backend;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CafeteriaStaff extends User{

    public CafeteriaStaff(String name, String mail, String password, String role,String address, String phoneNumber, String hesCode){
        super(name,mail,password,role,address,phoneNumber,hesCode);
    }

    //Methods
    public String showTotalInfo(){
        return null;
    }
    public String ShowRegInfo(String region){
        return null;
    }
    public Boolean searchIndividualInfo(int ID){
        return null;
    }
    public void enterTakenStatus(Meal meal){

    }
}
