package com.example.backend;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
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
        SpringApplication.run(BackendApplication.class,args);

        String roommates[] ={"Uğur"};
        LoginManager.createUser("Sergen", "gocmen.i@hotmail.com","abcdef","student","dorm", 1, "+11234567890","b",true, roommates);
    }
}
