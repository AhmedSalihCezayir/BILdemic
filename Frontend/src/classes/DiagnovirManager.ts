import User from './User'
import Diagnovir from './Diagnovir'
import {getDatabase, ref, set, push, onChildAdded, onChildChanged, onChildRemoved, query, orderByValue, equalTo, orderByChild, onValue, update, get} from "firebase/database";
import { getAuth } from "firebase/auth";

export default class DiagnovirManager {
  private static instance: DiagnovirManager | null = null;

  private constructor() {}

  public static getInstance(): DiagnovirManager {
    if(this.instance == null) {
        this.instance = new DiagnovirManager();
    }
    return this.instance;
  }

  public async takeReservation(date: string, place: string, time: string, OID:string) {
    const UID = getAuth().currentUser?.uid;
    const diagnovir = new Diagnovir(place, time, date, "", "");

    const db = getDatabase();

    let postListRef = ref(db, `Users/${getAuth().currentUser?.uid}/_orders`);
    let snapshotval = [{}];
    onValue(postListRef, async (snapshot) =>
    {
      snapshotval = snapshot.val();
    });

    if(snapshotval != null)
    {
      snapshotval.push(diagnovir)
      await set(ref(db, `Users/${getAuth().currentUser?.uid}/_orders`), snapshotval)
    }
    else
    {
      let emptyArray = [];
      emptyArray.push(diagnovir);
      await set(postListRef, emptyArray);
    }

    //created diagnovir added to Pending Diagnovir Tests database
    postListRef = ref(db, `PendingDiagnovirTests`);
    let newPostRef = push(postListRef);
    await set(newPostRef, diagnovir);

    //updated the weekly order available slOt for the diagnovir reservation
    const uniqueidfinding = diagnovir.date + diagnovir.time;
    console.log(uniqueidfinding);
    const getMyQuery = query(ref(db, `weeklyOrderSlut/Diagnovirs`), orderByChild('uniqueid'), equalTo(uniqueidfinding));              

    onValue(getMyQuery, async (snapshot) => 
    {
      console.log('snapshot1: ', snapshot.val());
      if(snapshot.val() != null)
      {  
        const snapshotval = snapshot.val();

        let wanted = "";
        for(let key of Object.keys(snapshotval))
        {
          if(snapshotval[key].uniqueid == uniqueidfinding)
          {
            snapshotval[key].Taken = "not available";
            wanted = key;
          }
        }

        set(ref(db, `weeklyOrderSlut/Diagnovirs/${wanted}`), snapshotval[wanted])

      /*set(ref(db, `weeklyOrderSlut/Diagnovirs/${key}`),{
        Taken: 'true'
        }).then((response) => {
          console.log(response);
        }).catch((error) => {
          console.log(error);
        }); */
    }              
  });
  }

  public cancelOrder(date: string, place: string, time: string): boolean {
    const db = getDatabase();
    const diagnovir = new Diagnovir(place, time, date, "", "");

    //Delete from the user's order list 
    let gettingOrdersArray = ref(db, `Users/${getAuth().currentUser?.uid}/_orders`);
    onValue( gettingOrdersArray, (snapshot) =>
    {
      const snapshotval = snapshot.val();
      //console.log(snapshotval);
      if(snapshotval != null)
      {
        for(let key of Object.keys(snapshotval))
        {
          let takeUserArray = snapshotval[key];

          var index = takeUserArray.indexOf(diagnovir);

          if (index > -1) {
            takeUserArray.splice(index, 1);
          }
          snapshotval[key] = takeUserArray;
          set(ref(db, `Users/${getAuth().currentUser?.uid}/_orders`),snapshotval[key]);
        }
      }
    });

    //Delete from the Pendings
    let userRef = ref(db, `PendingDiagnovirTests`);
    onValue( userRef, (snapshot) =>
    {
      const snapshotval = snapshot.val();
      //console.log(snapshotval);
      if(snapshotval != null)
      {
        for(let key of Object.keys(snapshotval))
        {
          let takeUserArray = snapshotval[key];
          takeUserArray.Delete(diagnovir);
          snapshotval[key] = takeUserArray;
        }
      }
    });

    const uniqueidfinding = diagnovir.date + diagnovir.place + diagnovir.time;
    const getMyQuery = query(ref(db, `weeklyOrderSlot/Diagnovirs`), orderByChild('uniqueid'), equalTo(uniqueidfinding));

    //update at slot
    onValue(getMyQuery, (snapshot) => 
    {
      if(snapshot.val() != null)
      {  
        const snapshotval = snapshot.val();

        let updatedID = "";
        for(let key of Object.keys(snapshotval))
        {
          if(snapshotval[key].uniqueid == uniqueidfinding)
          {
            snapshotval[key].Taken = "available";
            updatedID = key;
            break;
          }
        }
        //snapshotval.Diagnovir2 = {Taken:"bisey"};
        //console.log(snapshotval);  BU OLMAZSA HER SHEYİ GUNCELLE
        update(ref(db), {'weeklyOrderSlut/Diagnovirs': snapshotval[updatedID]}).then((response) => {
        //console.log(response);
      }).catch((error) => {console.log(error);})};
    });

    return true;
  }

  public getDiagnovirReservation() {
    const db = getDatabase();

    const reference = ref(db, `Users/${getAuth().currentUser?.uid}/_orders`);
    let result:any = {};
    onValue(reference, (snapshot) => 
    {
      if(snapshot.val() != null)
      {  
        const snapshotval = snapshot.val();

        for(let key of Object.keys(snapshotval))
        {
          if(snapshotval[key]._orderType == 4)
          {
            result = snapshotval[key];
            break;
          }
        } 
    }    
  }); 
  return result; 
  }
}


