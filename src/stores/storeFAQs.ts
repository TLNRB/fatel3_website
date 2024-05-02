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
const faqPricingCollectionRef = collection(db, "faqPricing");

interface FAQHome {
  id: string;
  question: string;
  answer: string;
}

interface FAQPricing {
  id: string;
  question: string;
  answer: string;
}

interface State {
  faqsHome: FAQHome[];
  faqsPricing: FAQPricing[];
}

export const useStoreFAQs = defineStore("storeFAQs", {
  state: (): State => {
    return {
      faqsHome: [],
      faqsPricing: [],
    };
  },

  actions: {
    // Get FAQs
    async getFAQs(collectionIndex: string) {
      const unsubscribe = onSnapshot(
        collectionIndex === "home"
          ? faqHomeCollectionRef
          : faqPricingCollectionRef,
        (querySnapshot) => {
          let faqs: any = [];
          querySnapshot.forEach((doc) => {
            let faq = {
              id: doc.id,
              question: doc.data().question,
              answer: doc.data().answer,
            };
            faqs.push(faq);
          });
          collectionIndex === "home"
            ? (this.faqsHome = faqs)
            : (this.faqsPricing = faqs);
        }
      );
    },
    // Add FAQ
    async addFAQ(collectionIndex: string, faqContent: any) {
      await addDoc(
        collectionIndex === "home"
          ? faqHomeCollectionRef
          : faqPricingCollectionRef,
        {
          question: faqContent.question,
          answer: faqContent.answer,
        }
      );
    },
    // Update FAQ
    async updateFAQ(collectionIndex: string, faqContent: any, id: string) {
      await updateDoc(
        doc(
          collectionIndex === "home"
            ? faqHomeCollectionRef
            : faqPricingCollectionRef,
          id
        ),
        {
          question: faqContent.question,
          answer: faqContent.answer,
        }
      );
    },
    // Delete FAQ
    async deleteFAQ(collectionIndex: string, id: string) {
      await deleteDoc(
        doc(
          collectionIndex === "home"
            ? faqHomeCollectionRef
            : faqPricingCollectionRef,
          id
        )
      );
    },
  },
});
