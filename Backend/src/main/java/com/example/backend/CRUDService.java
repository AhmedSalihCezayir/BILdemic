package com.example.backend;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import java.util.concurrent.ExecutionException;

@Service
public class CRUDService {

    public String createCRUD(User user, String role) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> collectionsApiFuture = dbFirestore.collection("Users").document(role).collection(user.getName()).document(user.getName()).set(user);
        return collectionsApiFuture.get().getUpdateTime().toString();
    }

    public Student getCRUD(String name) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("Users").document(name);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        Student student;
        if(document.exists()){
            student = document.toObject(Student.class);
            return student;
        }
        return null;
    }

    public String updateCRUD(User user) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection("Users").document(user.getName()).set(user);
        return collectionApiFuture.get().getUpdateTime().toString();
    }

    public String deleteCRUD(String name){
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> writeResult = dbFirestore.collection("users").document(name).delete();
        return "Succesfully deleted " + name;
    }
}

