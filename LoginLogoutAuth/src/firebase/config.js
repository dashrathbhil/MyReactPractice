import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider,FacebookAuthProvider ,GithubAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookAuthProvider = new FacebookAuthProvider();
export const githubAuthProvider = new GithubAuthProvider();