import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCP5OF9x9hHakkVNg4ChRShZxHiIS00ePk",
    authDomain: "olx-clone-aecfa.firebaseapp.com",
    projectId: "olx-clone-aecfa",
    storageBucket: "olx-clone-aecfa.appspot.com",
    messagingSenderId: "12460607635",
    appId: "1:12460607635:web:cee1a312e1657bccfb6566"
};

export default firebase.initializeApp(firebaseConfig);