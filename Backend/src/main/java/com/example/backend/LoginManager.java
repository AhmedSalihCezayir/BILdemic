package com.example.backend;


import com.google.firebase.auth.ActionCodeSettings;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.ExecutionException;

@RestController
public class LoginManager {

    //Properties
    public CRUDService crudService;

    //Firebase
    public FirebaseAuth mAuth;

    public LoginManager(CRUDService crudService) {
        this.crudService = crudService;
        mAuth = FirebaseAuth.getInstance();
    }


    @PostMapping("/create")
    public String createCRUD(@RequestBody Student student) throws InterruptedException, ExecutionException {
        return crudService.createCRUD(student);
    }

    @GetMapping("/get")
    public Student getCRUD(@RequestParam String name) throws InterruptedException, ExecutionException {
        return crudService.getCRUD(name);
    }

    @PutMapping("/update")
    public String updateCRUD(@RequestBody Student student) throws InterruptedException, ExecutionException {
        return crudService.updateCRUD(student);
    }

    @PutMapping("/delete")
    public String deleteCRUD(@RequestParam String name) throws InterruptedException, ExecutionException {
        return crudService.deleteCRUD(name);
    }

    @GetMapping
    public ResponseEntity<String> testGetEndpoint() {
        return ResponseEntity.ok("Test Get Endpoint is working");
    }

    public static boolean createUser(String name, String mail, String password, String role, String address, int ID, String phoneNumber, String hesCode, boolean resideInDorm, String[] roomMateNames) throws InterruptedException, ExecutionException {
        UserRecord.CreateRequest request = new UserRecord.CreateRequest()
                .setEmail(mail)
                .setEmailVerified(false)
                .setPassword(password)
                .setPhoneNumber(phoneNumber)
                .setDisplayName(name)
                .setPhotoUrl("http://www.example.com/12345678/photo.png")
                .setDisabled(false);

        UserRecord userRecord = FirebaseAuth.getInstance().createUserAsync(request).get();
        System.out.println("Successfully created new user: " + userRecord.getUid());

      
        try {
            ActionCodeSettings actionCodeSettings;
            String link = FirebaseAuth.getInstance().generateEmailVerificationLink(
                    mail);
            // Construct email verification template, embed the link and send
            // using custom SMTP server.
        } catch (FirebaseAuthException e) {
            System.out.println("Error generating email link: " + e.getMessage());
        }
        
        if (role.equals("Student")) {
            Student student = new Student(name, mail, password, role, address, ID, phoneNumber, hesCode, resideInDorm, roomMateNames);
            return true;
        }
        return true;
    }

    public static void sendCustomEmail(String email, String link) {}

}
