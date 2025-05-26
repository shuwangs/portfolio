// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAYFCDZweaGVvWHLhkBU9sSUaF1gzaUJoU",
    authDomain: "amzaon-clone-4bb41.firebaseapp.com",
    projectId: "amzaon-clone-4bb41",
    storageBucket: "amzaon-clone-4bb41.firebasestorage.app",
    messagingSenderId: "250745692601",
    appId: "1:250745692601:web:d5afb263e7fa1c48891668",
    measurementId: "G-ZXFZS9PWCJ"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  // Initialize Firebase
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export {db, auth};