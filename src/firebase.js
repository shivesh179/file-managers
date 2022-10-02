import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyCMRthSRzjVpEZ9VA4kDOZZGIaPn_PTDFM",
  authDomain: "drive-clone-live-77e61.firebaseapp.com",
  projectId: "drive-clone-live-77e61",
  storageBucket: "drive-clone-live-77e61.appspot.com",
  messagingSenderId: "387001909267",
  appId: "1:387001909267:web:c1dc7db55109aac5053fe6"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }