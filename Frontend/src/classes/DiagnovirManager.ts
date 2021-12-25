import User from './User'
import Diagnovir from './Diagnovir'
import {getDatabase, ref, set, push, onChildAdded, onChildChanged, onChildRemoved, query, orderByValue, equalTo, orderByChild, onValue, update} from "firebase/database";
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

  public takeReservation(date: string, place: string, time: string, OID:string): boolean {

    const diagnovir = new Diagnovir(place, time, date, "", "", OID);

    const db = getDatabase();

    //const ordersForUser = user.orders;
    //ordersForUser?.push(diagnovir);
    //user.orders = ordersForUser;//diagnovir added to order list of the wanted user

    //const crole = user.role.replace(/ /g, "") + "s";
    //order list added to database for the wanted user
    let postListRef = ref(db, `Users/${getAuth().currentUser?.uid}/_orders`);
    //let newPostRef = push(postListRef);
    //set(newPostRef, user.orders);
    onValue(postListRef, (snapshot) =>
    {
      const snapshotval = snapshot.val();
      console.log(snapshotval);
      if(snapshotval != null)
      {
        let updatedID = "";
        for(let key of Object.keys(snapshotval))
        {
          let takeUserArray = snapshotval[key];
          takeUserArray.push(diagnovir);
          snapshotval[key] = takeUserArray;
          updatedID = key;

          set(ref(db, `weeklyOrderSlut/Diagnovirs/${key}`),snapshotval).then((response) => {
              console.log(response);
            }).catch((error) => {
              console.log(error);
            });
            set(ref(db, `Users/${getAuth().currentUser?.uid}/_orders`), snapshotval[key]);
          }
      }
      else
      {
        let emptyArray = [];
        emptyArray.push(diagnovir);
        set(postListRef, emptyArray);
      }
    });


    //created diagnovir added to Pending Diagnovir Tests database
    postListRef = ref(db, `PendingDiagnovirTests`);
    let newPostRef = push(postListRef);
    set(newPostRef, diagnovir);

    //updated the weekly order available slOt for the diagnovir reservation
    // const db = getDatabase();
    //const diagnovir3 = new Diagnovir("B Building", "12.00", "25.12.2021", student.role, "", "sergen");
    //const uniqueidfinding = diagnovir3.date + diagnovir3.place + diagnovir3.time;
    const uniqueidfinding = diagnovir.date + diagnovir.place + diagnovir.time;
    //console.log("uniqueidfinding: ", uniqueidfinding);
    const getMyQuery = query(ref(db, `weeklyOrderSlot/Diagnovirs`), orderByChild('uniqueid'), equalTo(uniqueidfinding));              
    //console.log("getmyquesry: ", getMyQuery);

    onValue(getMyQuery, (snapshot) => 
    {
      if(snapshot.val() != null)
      {  
        //debugger;
        //console.log("snapshot: ", snapshot);
        const snapshotval = snapshot.val();
        //console.log("snapshotval: ", snapshotval);

        let updatedID = "";
        for(let key of Object.keys(snapshotval))
        {
          if(snapshotval[key].uniqueid == uniqueidfinding)
          {
            snapshotval[key].Taken = "not available";
            updatedID = key;
            break;
          }
        }
        //snapshotval.Diagnovir2 = {Taken:"bisey"};
        //console.log(snapshotval);
        update(ref(db), {'weeklyOrderSlut/Diagnovirs': snapshotval[updatedID]}).then((response) => {
        //console.log(response);
      }).catch((error) => {console.log(error);});

      /*set(ref(db, `weeklyOrderSlut/Diagnovirs/${key}`),{
        Taken: 'true'
        }).then((response) => {
          console.log(response);
        }).catch((error) => {
          console.log(error);
        }); */
    }              
  });
  return true;
  }

  public cancelOrder(diagnovir: Diagnovir): boolean {
    const db = getDatabase();
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
}


