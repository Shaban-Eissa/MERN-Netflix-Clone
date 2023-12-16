import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoVQ959a2-bNaTm-zXldgLJKfHmFnMTuw",
  authDomain: "react-netflix-clone-66424.firebaseapp.com",
  projectId: "react-netflix-clone-66424",
  storageBucket: "react-netflix-clone-66424.appspot.com",
  messagingSenderId: "1029204163605",
  appId: "1:1029204163605:web:0601a8ea88cc2f14ca621c",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
