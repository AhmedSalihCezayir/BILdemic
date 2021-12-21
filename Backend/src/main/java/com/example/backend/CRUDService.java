package com.example.backend;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import java.util.concurrent.ExecutionException;

@Service
public class CRUDService {

    // public String createCRUD(User user, String role) throws ExecutionException, InterruptedException {
    //    Firestore dbFirestore = FirestoreClient.getFirestore();
    //    ApiFuture<WriteResult> collectionsApiFuture = dbFirestore.collection("Users").document(role).collection(user.getName()).document(user.getName()).set(user);
    //    return collectionsApiFuture.get().getUpdateTime().toString();
    //}

    public String createCRUD(User user, String role) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        String Crole = role + "s";
        DocumentReference collection2 = dbFirestore.collection(Crole).document(user.getName()).collection("Lectures").document("Lecture A");
        ApiFuture<WriteResult> collectionsApiFuture = dbFirestore.collection(Crole).document(user.getName()).set(user);
       // CollectionReference collection = dbFirestore.collection(Crole).document(user.getName()).collection("RoomMateNames");
       // CollectionReference collection3 = dbFirestore.collection(Crole).document(user.getName()).collection("aAAAH");

        return collectionsApiFuture.get().getUpdateTime().toString();
    }

    public Student getCRUD(String name) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("Students").document(name);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        Student student;
        if(document.exists()){
            student = document.toObject(Student.class);
            System.out.println(student.getName());
            return student;
        }
        return null;
    }

    public String getUserRole(String name) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("Users").document(name);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        User user;
        if(document.exists()){
            user = document.toObject(User.class);
            return user.getRole();
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

