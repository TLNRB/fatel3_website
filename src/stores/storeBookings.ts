import { defineStore } from "pinia";
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase.js";

const bookingsCollectionRef = collection(db, "bookings");

interface Booking {
  id: string;
  topic: string;
  date: number;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  information: string | null;
}

interface State {
  bookings: Booking[];
}

export const useStoreBookings = defineStore("storeBookings", {
  state: (): State => {
    return {
      bookings: [],
    };
  },

  actions: {
    // Get FAQs
    async getFAQs(collectionIndex: string) {
      const unsubscribe = onSnapshot(bookingsCollectionRef, (querySnapshot) => {
        let bookings: any = [];
        querySnapshot.forEach((doc) => {
          let booking = {
            id: doc.id,
            topic: doc.data().topic,
            date: doc.data().date,
            time: doc.data().time,
            firstName: doc.data().firstName,
            lastName: doc.data().lastName,
            email: doc.data().email,
            information: doc.data().information,
          };
          bookings.push(booking);
        });
        this.bookings = bookings;
      });
    },
    // Add Booking
    async addBooking(bookingContent: any) {
      await addDoc(bookingsCollectionRef, {
        topic: bookingContent.topic,
        date: bookingContent.date,
        time: bookingContent.time,
        firstName: bookingContent.firstName,
        lastName: bookingContent.lastName,
        email: bookingContent.email,
        information: bookingContent.information,
      });
    },
    // Update Booking
    async updateBooking(bookingContent: any, id: string) {
      await updateDoc(doc(bookingsCollectionRef, id), {
        topic: bookingContent.topic,
        date: bookingContent.date,
        time: bookingContent.time,
        firstName: bookingContent.firstName,
        lastName: bookingContent.lastName,
        email: bookingContent.email,
        information: bookingContent.information,
      });
    },
    // Delete Booking
    async deleteBooking(id: string) {
      await deleteDoc(doc(bookingsCollectionRef, id));
    },
  },
});
