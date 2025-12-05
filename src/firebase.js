import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTX3dNK2R5YOYqxRcFNMxcic0JxnsAUvs",
  authDomain: "supertiendaskamala-b0389.firebaseapp.com",
  projectId: "supertiendaskamala-b0389",
  storageBucket: "supertiendaskamala-b0389.firebasestorage.app",
  messagingSenderId: "459414841850",
  appId: "1:459414841850:web:5c58588850e4d721d7dc43",
  measurementId: "G-LR7DXS4LBC"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);