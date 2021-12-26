import SportActivity from "./SportActivity";
import User from "./User";
import { getDatabase, ref, push, set, get, query, orderByChild, equalTo, onValue, DataSnapshot } from "firebase/database";
import { getAuth } from "firebase/auth";


export default class SportManager {

    //Properties
    private static instance: SportManager | null = null;

    //Methods
    public static getInstance():SportManager{
        if(this.instance == null) {
            this.instance = new SportManager();
        }
        return this.instance;
    }

    public async createSportRes(ownerUID: string, date:string, place:string, time:string, participants: string[], activity: string) {
        const db = getDatabase();
        let sportActivity = new SportActivity(place, time, date, ownerUID, participants, activity);

        await set(ref(db, `Users/${ownerUID}/Orders/${sportActivity._OID}`), sportActivity);
        await set(ref(db, `PendingSportActivities/${sportActivity._OID}`), sportActivity);
    }

    //public cancelOrder(ownerUID: string, OID:string){
    //   const db = getDatabase();
    //    let reference = ref(db,`Users/${ownerUID}/Orders/`)
    //    let query1 = query(reference, orderByChild("_OID"),equalTo(OID))
    //   onValue(query1, async (snapshot) => {
    //        snapshot.forEach(dSnap) =>{
    //            dSnap.ref.remove()
    //        }
    //    ref.remove()
    //    }
    //}

    // If rendezvous taker did not attend, change absence status
    public async changeAbsenceStatus(ownerUID: string, OID:string){
        const db = getDatabase();
        let sportPunishStatus = (await get(ref(db, `Users/${ownerUID}/ `))).val();

        let sportPunishCounter = (await get(ref(db, `Users/${ownerUID}/SportPunishCounter`))).val();
        let sportActivity = (await get(ref(db, `Users/${ownerUID}/Orders/${OID} `))).val();
        await set(ref(db, `Users/${ownerUID}/Orders/${OID}/${sportActivity._absenceStatus}`), true); 
        await set(ref(db, `PendingMealOrders/${OID}/${sportActivity._absenceStatus}`), true);

        if(!sportPunishCounter || sportPunishCounter < 3){
            sportPunishCounter = sportPunishCounter + 1;
            await set(ref(db, `Users/${ownerUID}/SportPunishCounter`), sportPunishCounter); 
        }
        
        // User will get sport punish status if the counter reaches tree
        if(sportPunishCounter == 3){
            sportPunishStatus = true;
            await set(ref(db, `Users/${ownerUID}/SportPunishStatus`), sportPunishStatus);
            sportPunishCounter = 0; 
        }    
    }
}
