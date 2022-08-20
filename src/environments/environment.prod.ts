import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDEx001gVwEgTU_Jmd3oXJ-NxUPUi8_fFk",
  authDomain: "yopon-lomos.firebaseapp.com",
  projectId: "yopon-lomos",
  storageBucket: "yopon-lomos.appspot.com",
  messagingSenderId: "846096611993",
  appId: "1:846096611993:web:f0ffce86764a26391fd608"
};

export const environment = {
  production: true,
  firebaseConfig
};
const app = initializeApp(firebaseConfig);