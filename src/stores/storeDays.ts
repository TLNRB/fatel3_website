import { defineStore } from "pinia";
import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  getDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase.js";

const daysCollectionRef = collection(db, "days");

interface Day {
  id: string;
  times: Time[];
  dayIndex: number;
  day: string;
}

interface Time {
  startTime: string;
  endTime: string;
  reserved: boolean;
}

interface State {
  days: Day[];
}

export const useStoreDays = defineStore("storeDays", {
  state: () => {
    return {
      days: [],
    };
  },

  actions: {
    // Get Days
    async getDays() {
      const unsubscribe = onSnapshot(daysCollectionRef, (querySnapshot) => {
        let days: any = [];
        querySnapshot.forEach((doc) => {
          let day = {
            id: doc.id,
            times: doc.data().times,
            dayIndex: doc.data().dayIndex,
            day: doc.data().day,
          };
          days.push(day);
        });
        this.days = days;
      });
    },
    // Add FAQ
    /* async addDay(times: Time[], dayIndex: number, day: string) {
      await addDoc(daysCollectionRef, {
        times: times,
        dayIndex: dayIndex,
        day: day,
      });
    }, */
    // Update Day Reserved Time
    async updateDayReservedTime(
      id: string,
      timeIndex: number,
      operation: string
    ) {
      // Get the document reference from Firestore
      const docRef = doc(daysCollectionRef, id);
      // Get the document snapshot from Firestore
      const docSnap = await getDoc(docRef);
      // Get the data from the document snapshot
      const data: any = docSnap.data();
      // Get the "times" array from the data
      const times: any = data.times;

      if (operation === "reserve") {
        // Update the "reserved" field of the specified time
        times[timeIndex].reserved = true;
        // Update the entire "times" array in the Firestore document.
        await updateDoc(docRef, { times });
      } else if (operation == "delete") {
        // Update the "reserved" field of the specified class
        times[timeIndex].reserved = false;
        // Update the entire "classes" array in the Firestore document.
        await updateDoc(docRef, { times });
      }
    },
  },
});
