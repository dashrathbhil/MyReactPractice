import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider,FacebookAuthProvider ,GithubAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC65J6csYYNsSPIb-X__q1Qu1lZdKR5RNQ",
  authDomain: "auth-fb73f.firebaseapp.com",
  projectId: "auth-fb73f",
  storageBucket: "auth-fb73f.firebasestorage.app",
  messagingSenderId: "162103005881",
  appId: "1:162103005881:web:4d8cf81580885667528168",
  measurementId: "G-WRZG999YGN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookAuthProvider = new FacebookAuthProvider();
export const githubAuthProvider = new GithubAuthProvider();