import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAi5o3ZWumhhO9cU7RoutwvLOCuqC1WmY0",
  authDomain: "recommend-c460b.firebaseapp.com",
  projectId: "recommend-c460b",
  storageBucket: "recommend-c460b.appspot.com",
  messagingSenderId: "78212450453",
  appId: "1:78212450453:web:3c7af11a00ef2e3551339c",
};

// Initialize Firebase
const iniApp2 = firebase.initializeApp(firebaseConfig,'NewApp');
firebase.analytics();

var db2 = iniApp2.firestore();

export { db2 };
