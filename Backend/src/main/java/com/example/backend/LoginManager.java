package com.example.backend;


import com.google.firebase.auth.FirebaseAuth;
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
    public ResponseEntity<String> testGetEndpoint(){
        return ResponseEntity.ok("Test Get Endpoint is working");
    }


    public static void createUser() throws InterruptedException, ExecutionException {
        // [START create_user]
        UserRecord.CreateRequest request = new UserRecord.CreateRequest()
                .setEmail("user@example.com")
                .setEmailVerified(false)
                .setPassword("secretPassword")
                .setPhoneNumber("+11234567890")
                .setDisplayName("John Doe")
                .setPhotoUrl("http://www.example.com/12345678/photo.png")
                .setDisabled(false);

        UserRecord userRecord = FirebaseAuth.getInstance().createUserAsync(request).get();
        System.out.println("Successfully created new user: " + userRecord.getUid());
        // [END create_user]
    }
}
