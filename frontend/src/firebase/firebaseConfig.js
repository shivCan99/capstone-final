import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/database"

const firebaseConfig = {
  apiKey: "AIzaSyC02PrTMwb3FFAiziUCHNa8iX58WxB0uSs",
  authDomain: "stripe-subscription-e36fd.firebaseapp.com",
  projectId: "stripe-subscription-e36fd",
  storageBucket: "stripe-subscription-e36fd.appspot.com",
  messagingSenderId: "296707843786",
  appId: "1:296707843786:web:df047ee299ef2b72c1f633"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase