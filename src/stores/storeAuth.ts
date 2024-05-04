import { defineStore } from "pinia";
import { auth } from "../firebase/firebase.js";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

interface User {
  id: string;
  email: string;
}

interface State {
  user: User;
  error: string | null;
}

export const useStoreAuth = defineStore("storeAuth", {
  state: (): State => ({
    user: { id: "", email: "" },
    error: null,
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
            this.error = null;
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
