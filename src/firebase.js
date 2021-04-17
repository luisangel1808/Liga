  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';
  const firebaseConfig = {
    apiKey: "AIzaSyAI7z3y0VSclseQzGHdhkAyY1La2Dz-7hY",
    authDomain: "licajedrez.firebaseapp.com",
    databaseURL: "https://licajedrez-default-rtdb.firebaseio.com",
    projectId: "licajedrez",
    storageBucket: "licajedrez.appspot.com",
    messagingSenderId: "140936602564",
    appId: "1:140936602564:web:6e10bbaa6a9fc7bf833a91"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();
  export const auth = fb.auth();
