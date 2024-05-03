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
  day: number;
  month: number;
  year: number;
  startTime: string;
  endTime: string;
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
    // Get Bookings
    async getBookings() {
      const unsubscribe = onSnapshot(bookingsCollectionRef, (querySnapshot) => {
        let bookings: any = [];
        querySnapshot.forEach((doc) => {
          let booking = {
            id: doc.id,
            topic: doc.data().topic,
            day: doc.data().day,
            month: doc.data().month,
            year: doc.data().year,
            startTime: doc.data().startTime,
            endTime: doc.data().endTime,
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
        day: bookingContent.day,
        month: bookingContent.month,
        year: bookingContent.year,
        startTime: bookingContent.startTime,
        endTime: bookingContent.endTime,
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
        day: bookingContent.day,
        month: bookingContent.month,
        year: bookingContent.year,
        startTime: bookingContent.startTime,
        endTime: bookingContent.endTime,
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
