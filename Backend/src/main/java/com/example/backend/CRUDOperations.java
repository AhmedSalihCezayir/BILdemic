package com.example.backend;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.ExecutionException;

@RestController
public class CRUDOperations {

    //Properties
    public CRUDService crudService;

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
}
