package com.example.backend;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.UserRecord;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
public class CRUDManager {

    //Properties
    public CRUDService crudService;
    private static CRUDManager instance = null;

    //Constructor
    private CRUDManager() {
        this.crudService = new CRUDService();
    }

    //Methods
    public static CRUDManager getInstance(){
        if(instance == null) {
            instance = new CRUDManager();
        }
        return instance;
    }

    @PostMapping("/create")
    public String createCRUD(@RequestBody User user) throws InterruptedException, ExecutionException {
        return crudService.createCRUD(user, user.getRole());
    }

    @PostMapping("/createStudent")
    public String createStudent(@RequestBody String name, String mail, String password, String role, String address, String phoneNumber, String hesCode,
                                int ID, boolean resideInDorm) throws InterruptedException, ExecutionException {
        Student student = new Student(name, mail, password, role, address, phoneNumber, hesCode, ID, resideInDorm, null);
        return crudService.createCRUD(student, student.getRole());
    }

    @GetMapping("/get")
    public Student getCRUD(@RequestParam String name) throws InterruptedException, ExecutionException {
        return crudService.getCRUD(name);
    }

    @GetMapping("/getRole")
    public String getUserRole(@RequestParam String name) throws InterruptedException, ExecutionException {
        return crudService.getUserRole(name);
    }

    @PutMapping("/update")
    public String updateCRUD(@RequestBody User user) throws InterruptedException, ExecutionException {
        return crudService.updateCRUD(user);
    }

    @PutMapping("/delete")
    public String deleteCRUD(@RequestParam String name) throws InterruptedException, ExecutionException {
        return crudService.deleteCRUD(name);
    }

    @GetMapping
    public ResponseEntity<String> testGetEndpoint() {
        return ResponseEntity.ok("Test Get Endpoint is working");
    }
}
