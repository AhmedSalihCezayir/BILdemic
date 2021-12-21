package com.example.backend;

import com.google.firebase.auth.UserRecord;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
public class CRUDManager {

    //Properties
    private static CRUDManager instance = null;
    public CRUDService crudService;

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


    public String createCRUD(@RequestBody User user) throws InterruptedException, ExecutionException {
        return crudService.createCRUD(user, user.getRole());
    }
    
    @PostMapping("/create")
    public static boolean createUser(String name, String mail, String password, String role, String address, String phoneNumber, String hesCode, int ID, boolean resideInDorm, List roomMateNames) throws InterruptedException, ExecutionException {
        UserRecord.CreateRequest request = new UserRecord.CreateRequest()
                .setEmail(mail)
                .setEmailVerified(false)
                .setPassword(password)
                .setPhoneNumber(phoneNumber)
                .setDisplayName(name)
                .setPhotoUrl("http://www.example.com/12345678/photo.png")
                .setDisabled(false);

        // UserRecord userRecord = FirebaseAuth.getInstance().createUserAsync(request).get();
        System.out.println("Successfully created new user: " + name);


        if (role.equals("Student")) {
            Student student = new Student(name, mail, password, role, address, phoneNumber, hesCode, ID, resideInDorm, roomMateNames);
            CRUDManager.getInstance().createCRUD(student);
            return true;
        }
        else if (role.equals("Instructor")) {
            Instructor instructor = new Instructor(name, mail, password, role, address, phoneNumber, hesCode, ID, false, null);
            CRUDManager.getInstance().createCRUD(instructor);
            return true;
        }
        else if (role.equals("CafeteriaStaff")) {
            CafeteriaStaff cafeteriaStaff = new CafeteriaStaff(name, mail, password, role, address, phoneNumber, hesCode);
            CRUDManager.getInstance().createCRUD(cafeteriaStaff);
            return true;
        }
        else if (role.equals("HealthCenterStaff")) {
            HealthCenterStaff healthCenterStaff = new HealthCenterStaff(name, mail, password, role, address, phoneNumber, hesCode);
            CRUDManager.getInstance().createCRUD(healthCenterStaff);
            return true;
        }
        else if (role.equals("DiagnovirTester")) {
            DiagnovirTester diagnovirTester = new DiagnovirTester(name, mail, password, role, address, phoneNumber, hesCode);
            CRUDManager.getInstance().createCRUD(diagnovirTester);
            return true;
        }
        else if (role.equals("SportStaff")) {
            SportStaff sportStaff = new SportStaff(name, mail, password, role, address, phoneNumber, hesCode);
            CRUDManager.getInstance().createCRUD(sportStaff);
            return true;
        }
        else{
            return false;
        }
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
