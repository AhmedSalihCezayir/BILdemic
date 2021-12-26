package com.example.backend;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.ExecutionException;

@SpringBootApplication
public class BackendApplication {

    public static void main(String[] args) throws IOException, ExecutionException, InterruptedException {
        ClassLoader classLoader = BackendApplication.class.getClassLoader();
        File file = new File(Objects.requireNonNull(classLoader.getResource("serviceAccountKey.json")).getFile());
        FileInputStream serviceAccount = new FileInputStream(file.getAbsolutePath());

        FirebaseOptions options = new FirebaseOptions.Builder()
                .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                .setDatabaseUrl("https://bildemic-718ce-default-rtdb.europe-west1.firebasedatabase.app")
                .build();

        FirebaseApp.initializeApp(options);
        LoginManager loginManager = LoginManager.getInstance();
        SpringApplication.run(BackendApplication.class,args);


        String roommates = "Uğur";
        loginManager.createUser("Sergen", "gocmen.i@hotmail.com","abcdef","Student","dorm", "+11234567890","b", 1,true, roommates);
        //loginManager.createUser("Eray", "e@hotmail.com","abcdef","Instructor","ankara", "+11234567891","b", 2,false, null);
        //loginManager.createUser("Selim", "s@hotmail.com","abcdef","CafeteriaStaff","istanbul", "+11234567892","b", 3,false, null);
        //loginManager.createUser("Aynur", "a@hotmail.com","abcdef","HealthCenterStaff","adana", "+11234567893","b", 4,false, null);
        //loginManager.createUser("Haltay", "h@hotmail.com","abcdef","DiagnovirTester","eskişehir", "+11234567894","b", 4,false, null);
        //loginManager.createUser("Fazlı", "ff@hotmail.com","abcdef","SportStaff","ağrı", "+11234567895","b", 4,false, null);
    }
}
