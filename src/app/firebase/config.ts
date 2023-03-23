import { initializeApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCQZLjmr0aKzE7KAZO3Blkyht2Qn40wunc",
  authDomain: "ausy-germany.firebaseapp.com",
  projectId: "ausy-germany",
  storageBucket: "ausy-germany.appspot.com",
  messagingSenderId: "189962239074",
  appId: "1:189962239074:web:00a7d97fe9f6c7724e253b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;