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

const faqHomeCollectionRef = collection(db, "faqHome");

export const useStoreFAQsHome = defineStore("storeFAQsHome", {
  state: () => {
    return {
      faqs: [],
    };
  },

  actions: {
    // Get FAQs
    async getFAQs() {
      const unsubscribe = onSnapshot(faqHomeCollectionRef, (querySnapshot) => {
        let faqs: any = [];
        querySnapshot.forEach((doc) => {
          let faq = {
            id: doc.id,
            question: doc.data().question,
            answer: doc.data().answer,
          };
          faqs.push(faq);
        });
        this.faqs = faqs;
      });
    },
    // Add FAQ
    async addFAQ(faqContent: any) {
      await addDoc(faqHomeCollectionRef, {
        question: faqContent.question,
        answer: faqContent.answer,
      });
    },
    // Update FAQ
    async updateFAQ(faqContent: any, id: string) {
      await updateDoc(doc(faqHomeCollectionRef, id), {
        question: faqContent.question,
        answer: faqContent.answer,
      });
    },
    // Delete FAQ
    async deleteFAQ(id: string) {
      await deleteDoc(doc(faqHomeCollectionRef, id));
    },
  },
});
