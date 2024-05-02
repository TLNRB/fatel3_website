import { defineStore } from "pinia";
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { db } from "../firebase/firebase.js";

const reviewsCollectionRef = collection(db, "reviews");

interface Review {
  id: string;
  name: string;
  businessPosition: string;
  review: string;
  imgName: string;
  img: string;
}

interface State {
  reviews: Review[];
  imgName: string | null;
  img: string | null;
}

export const useStoreReviews = defineStore("storeReviews", {
  state: (): State => {
    return {
      reviews: [],
      imgName: null,
      img: null,
    };
  },

  actions: {
    // Get Reviews
    async getReviews() {
      const unsubscribe = onSnapshot(reviewsCollectionRef, (querySnapshot) => {
        let reviews: any = [];
        querySnapshot.forEach((doc) => {
          let review = {
            id: doc.id,
            name: doc.data().name,
            businessPosition: doc.data().businessPosition,
            review: doc.data().review,
            imgName: doc.data().imgName,
            img: doc.data().img,
          };
          reviews.push(review);
        });
        this.reviews = reviews;
      });
    },
    // Get Image Url
    async getImageUrl(imageName: string, file: any) {
      // Create a root reference
      const storage = getStorage();
      // Create a reference to the image
      const imageRef = ref(storage, imageName);

      this.imgName = imageName;
      await uploadBytes(imageRef, file);
      await getDownloadURL(ref(storage, imageName)).then((url) => {
        this.img = url;
      });
    },
    // Add Reviews
    async addReview(reviewContent: any) {
      await addDoc(reviewsCollectionRef, {
        name: reviewContent.name,
        businessPosition: reviewContent.businessPosition,
        review: reviewContent.review,
        imgName: this.imgName,
        img: this.img,
      });
      this.imgName = null;
      this.img = null;
    },
    // Close Add Review
    closeAddCoach() {
      if (this.imgName != null && this.img != null) {
        // Create a reference to the image
        const imageRef = ref(getStorage(), this.imgName);
        //Check if another class uses the same picture
        let imageCondition = false;
        for (let i = 0; i < this.reviews.length; i++) {
          if (this.reviews[i].imgName === this.imgName) {
            imageCondition = true;
          }
        }

        if (!imageCondition) {
          deleteObject(imageRef);
        }
      }
      this.img = "";
      this.imgName = "";
    },
    // Update Review
    async updateReview(reviewContent: any, id: string) {
      await updateDoc(doc(reviewsCollectionRef, id), {
        name: reviewContent.name,
        businessPosition: reviewContent.businessPosition,
        review: reviewContent.review,
      });
    },
    // Update Image
    async updateImage(id: string) {
      const filteredReview = this.reviews.filter((review) => review.id === id);
      // Check if the image has been changed
      if (
        filteredReview[0].img !== this.img &&
        this.imgName !== null &&
        this.img !== null
      ) {
        // Create a reference to the image
        const imageRef = ref(getStorage(), filteredReview[0].imgName);
        //Check if another class uses the same picture
        let imageCondition = false;
        for (let i = 0; i < this.reviews.length; i++) {
          if (
            this.reviews[i].imgName === filteredReview[0].imgName &&
            this.reviews[i].id !== filteredReview[0].id
          ) {
            imageCondition = true;
          }
        }

        if (!imageCondition) {
          deleteObject(imageRef);
        }

        await updateDoc(doc(reviewsCollectionRef, id), {
          imgName: this.imgName,
          img: this.img,
        });
      }
      this.imgName = null;
      this.img = null;
    },
    // Close Editing
    closeEditing(id: string) {
      const filteredReview = this.reviews.filter((review) => review.id === id);
      // Check if the image has been changed
      if (
        filteredReview[0].img !== this.img &&
        this.imgName !== null &&
        this.img !== null
      ) {
        // Create a reference to the image
        const imageRef = ref(getStorage(), this.imgName);
        //Check if another class uses the same picture
        let imageCondition = false;
        for (let i = 0; i < this.reviews.length; i++) {
          if (this.reviews[i].imgName === this.imgName) {
            imageCondition = true;
          }
        }

        if (!imageCondition) {
          deleteObject(imageRef);
        }
      }
      this.img = null;
      this.imgName = null;
    },
    // Delete Review
    async deleteReview(id: string) {
      const filteredReview = this.reviews.filter((review) => review.id === id);
      // Create a reference to the image
      const imageRef = ref(getStorage(), filteredReview[0].img);
      //Check if another class uses the same picture
      let imageCondition = false;
      for (let i = 0; i < this.reviews.length; i++) {
        if (
          this.reviews[i].imgName === filteredReview[0].imgName &&
          this.reviews[i].id !== filteredReview[0].id
        ) {
          imageCondition = true;
        }
      }

      if (!imageCondition && filteredReview[0].imgName) {
        deleteObject(imageRef);
      }
      await deleteDoc(doc(reviewsCollectionRef, id));
      imageCondition = false;
    },
  },
});
