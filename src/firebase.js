import firebase from 'firebase/app'
import "firebase/auth"
import 'firebase/firestore'

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
})

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
if (!firebase.apps.length) {
  firebase.initializeApp(firebase.initializeApp(firebaseConfig));
}else {
  firebase.app(); // if already initialized, use that one
}



export const auth = app.auth()
// replace where you would use app for firebase
export default firebase