import firebase from 'firebase/app';
import 'firebase/functions';
import 'firebase/firestore';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSj4Cu2hEl_BY0qxgFoJYfZmFs1Lxru-c",
  authDomain: "todomanager-c4dab.firebaseapp.com",
  projectId: "todomanager-c4dab",
  storageBucket: "todomanager-c4dab.appspot.com",
  messagingSenderId: "774757635200",
  appId: "1:774757635200:web:ae56e093e98245d4e8c265",
  measurementId: "G-71H3MS91B8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase