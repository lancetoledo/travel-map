import firebase from 'firebase/app'
import 'firebase/firestore'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD--v5wKv7Wzt4w5aEyjWG3izTUpMVPcXk",
    authDomain: "travel-logger-16608.firebaseapp.com",
    projectId: "travel-logger-16608",
    storageBucket: "travel-logger-16608.appspot.com",
    messagingSenderId: "765643164619",
    appId: "1:765643164619:web:f55cecffee8e24f648844e",
    measurementId: "G-0D22Q7MFWK"
  };

// Intialize firebase
firebase.initializeApp(firebaseConfig)

export default firebase