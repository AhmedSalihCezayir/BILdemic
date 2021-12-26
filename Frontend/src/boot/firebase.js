import { initializeApp } from 'firebase/app';
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { ref, onValue, getDatabase } from "firebase/database"
import { Store } from '../store/index.js'

const firebaseConfig = {
  apiKey: "AIzaSyAmq_iT6NKRO9P8IgtvB-rdiLyWHVPAie4",
  authDomain: "bildemic-718ce.firebaseapp.com",
  databaseURL: "https://bildemic-718ce-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bildemic-718ce",
  storageBucket: "bildemic-718ce.appspot.com",
  messagingSenderId: "131859599102",
  appId: "1:131859599102:web:52bc71ba06a1336ef3dfaf",
  measurementId: "G-GZYGCBQXS0"
};

initializeApp(firebaseConfig);


onAuthStateChanged(getAuth(), (user) => {
  if (user) {
    const db = getDatabase();
    const reference = ref(db, `Users/${user.uid}`);

    onValue(reference, (snapshot) => {
        const data = snapshot.val();
        Store.commit('settings/setCurrentUserUID', user.uid);
        Store.commit('settings/setCurrentUserRole', data._role);
        localStorage.setItem('currentUserUID', data._Uid);
        localStorage.setItem('currentUserRole', data._role);
    });
  }
});