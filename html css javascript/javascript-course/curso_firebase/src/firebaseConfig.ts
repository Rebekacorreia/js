//import firebase from "firebase/app";
//import "firebase/firestore";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCc3YRuQjDK-hrtVgbiz93zvaKjVSPL2Q",
  authDomain: "curso-de-firebase-f8e9d.firebaseapp.com",
  projectId: "curso-de-firebase-f8e9d",
  storageBucket: "curso-de-firebase-f8e9d.appspot.com",
  messagingSenderId: "1076681954760",
  appId: "1:1076681954760:web:e24971c280551eff995cfd"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const db = firebase.firestore();
