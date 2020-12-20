import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCoIElKe9kFs6Ha4lGAMu9-3QRxxhfClDw",
    authDomain: "linkedin-clone-3669a.firebaseapp.com",
    projectId: "linkedin-clone-3669a",
    storageBucket: "linkedin-clone-3669a.appspot.com",
    messagingSenderId: "982989257943",
    appId: "1:982989257943:web:2717481c336475b52e8492"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
