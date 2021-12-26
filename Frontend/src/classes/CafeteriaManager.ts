import Meal from './Meal';
import User from './User';
import { getDatabase, ref, push, set, get, query, orderByChild, equalTo, onValue } from "firebase/database";
import { number } from '@intlify/core-base';
import { getAuth } from 'firebase/auth';

export default class CafeteriaManager {
  
  //Properties
  private static instance: CafeteriaManager | null = null;

  //Constructor
  private constructor() {}

  //Methods
  public static getInstance(): CafeteriaManager {
    if (this.instance == null) {
      this.instance = new CafeteriaManager();
    }
    return this.instance;
  }

  public async createMealOrder(place: string, date: string, time: string, type: string){
    const ownerUID = getAuth().currentUser?.uid || ' ';
    const db = getDatabase();
    let meal = new Meal(place, time, date, ownerUID, type);
    let counter78 = 0; // Counter for 78th dorm region
    let counter51 = 0; // Counter for 51th dorm region
    let counter90 = 0; // Counter for 90th dorm region
    let totalCounter: number = 0; // Total counter

    // Hold regional meal counter for regional meal distributiın information
    if(place == "78" && counter78 != null){
      counter78 = (await get(ref(db, `PendingMealOrders/Counter78/${counter78}`))).val();
      (await get(ref(db, `PendingMealOrders/TotalCounter/${totalCounter}`))).val();
      counter78 = counter78 + 1;
      totalCounter = totalCounter + 1;
      await set(ref(db, `PendingMealOrders/Counter78/${counter78}`), counter78);
      await set(ref(db, `PendingMealOrders/TotalCounter/${totalCounter}`), totalCounter);
    }

    else if(place == "51" && counter51 != null){
      (await get(ref(db, `PendingMealOrders/Counter51/${counter51}`))).val();
      (await get(ref(db, `PendingMealOrders/TotalCounter/${totalCounter}`))).val();
      counter51 = counter51 + 1;
      totalCounter = totalCounter + 1;
      await set(ref(db, `PendingMealOrders/Counter51/${counter51}`), counter51);
      await set(ref(db, `PendingMealOrders/TotalCounter/${totalCounter}`), totalCounter);
    }

    else if(place == "90" && counter90 != null){
      (await get(ref(db, `PendingMealOrders/Counter90/${counter90}`))).val();
      (await get(ref(db, `PendingMealOrders/TotalCounter/${totalCounter}`))).val();
      counter90 = counter90 + 1; 
      totalCounter = totalCounter + 1;
      await set(ref(db, `PendingMealOrders/Counter90/${counter90}`), counter90);
      await set(ref(db, `PendingMealOrders/TotalCounter/${totalCounter}`), totalCounter);
    }

    else {
      counter90 = 0;
      counter51 = 0;
      counter78 = 0;
      totalCounter = 0;
      await set(ref(db, `PendingMealOrders/Counter78/${counter78}`), counter78);
      await set(ref(db, `PendingMealOrders/Counter51/${counter51}`), counter51);
      await set(ref(db, `PendingMealOrders/Counter90/${counter90}`), counter90);
      await set(ref(db, `PendingMealOrders/TotalCounter/${totalCounter}`), totalCounter);
    }

    await set(ref(db, `Users/${ownerUID}/Orders/${meal._OID}`), meal);
    await set(ref(db, `PendingMealOrders/${meal._OID}`), meal);
    return true;
  }

  // To change taken status of meal order 
  public async changeTakenStatus(UID:string, OID: string){
    const db = getDatabase();

    let order = (await get(ref(db, `Users/${UID}/Orders/ `))).val();
    await set(ref(db, `Users/${UID}/Orders/${OID}/${order._taken}`), true);
    await set(ref(db, `PendingMealOrders/${OID}/${order._taken}`), true);
    return true;
  }

  // To get regional order count
  public seeRegionalOrders(place:string): number{
    const db = getDatabase();
    let orderCount: number = 0;
    if(place == "78"){
      let reference = ref(db, `PendingMealOrders/Counter78/`)
      onValue(reference, async (snapshot) => {
        const temp = snapshot.val();
        orderCount = temp; 
      })
    }

    if(place == "51"){
      let reference = ref(db, `PendingMealOrders/Counter51/`)
      onValue(reference, (snapshot) => {
        const temp = snapshot.val();
        orderCount = temp; 
      })
    }

    if(place == "90"){
      let reference = ref(db, `PendingMealOrders/Counter90/`)
      onValue(reference, (snapshot) => {
        const temp = snapshot.val();
        orderCount = temp; 
      })
    }
    return orderCount;
  }

  // To get total order count
  public seeTotalOrders(): number {
    const db = getDatabase();
    let orderCount: number = 0;
    let reference = ref(db, `PendingMealOrders/TotalCounter/`)
    onValue(reference, (snapshot) => {
      const temp = snapshot.val();
      orderCount = temp; 
    })
    return orderCount;
  }
}