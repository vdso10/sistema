import React from 'react'
import firebase from 'firebase/compat/app'
import { initializeApp } from "firebase/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'


const firebaseConfig = {
    apiKey: "AIzaSyBeFTzAmMmg9xszvlrkYIQvREXASw96yzU",
    authDomain: "sistema-98ebe.firebaseapp.com",
    projectId: "sistema-98ebe",
    storageBucket: "sistema-98ebe.appspot.com",
    messagingSenderId: "1058501650471",
    appId: "1:1058501650471:web:eb96b38e41f5d207b2c602",
    measurementId: "G-GSJKFTJ7JM"
  };

  
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase
  