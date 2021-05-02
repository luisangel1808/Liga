  import firebase from 'firebase/app';
  //import firebaseui from 'firebaseui';
  import 'firebase/firestore';
  import 'firebase/auth';
  //import *  as firebase from "firebase/app" 
  import *  as firebaseui from "firebaseui"

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

  const uiConfig = {
    signInSuccessUrl: '/',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };
  export const startUi = (elementId) =>{
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
    ui.start(elementId, uiConfig);
  }
