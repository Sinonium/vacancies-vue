import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDQXp85MeJRQym1NdCeeDLYSVnVFj1Ekms",
  authDomain: "vacancies-vue.firebaseapp.com",
  projectId: "vacancies-vue",
  storageBucket: "vacancies-vue.appspot.com",
  messagingSenderId: "1073216221701",
  appId: "1:1073216221701:web:6afb62ef17edd579f3226c",
  measurementId: "G-T0J645DPCM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);