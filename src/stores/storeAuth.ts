import { defineStore } from "pinia";
import { auth } from "../firebase/firebase.js";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export const useStoreAuth = defineStore("storeAuth", {
  state: () => ({
    user: { id: "", email: "" },
    error: "",
  }),

  actions: {
    init() {
      onAuthStateChanged(auth, (user: any) => {
        if (user) {
          this.user.id = user.uid;
          this.user.email = user.email;
          this.router.push("/admin");
        } else {
          this.user = { id: "", email: "" };
        }
      });
    },
    //Login User
    loginUser(credentials: any) {
      signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then(() => {
          //Logged in
          this.error = "";
        })
        .catch((error) => {
          this.error = error.message;
          console.log("error message: ", error.message);
          setInterval(() => {
            this.error = "";
          }, 5000);
        });
    },
    //Logout User
    logOutUser() {
      signOut(auth)
        .then(() => {
          this.router.replace("/");
        })
        .catch((error) => {
          console.log("error message: ", error.message);
        });
    },
  },
});
