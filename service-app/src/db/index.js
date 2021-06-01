import firebase from 'firebase/app'
import 'firebase/firestore'

const db = firebase
.initializeApp(
    {
        apiKey: "AIzaSyA35XWREnu4VDPSAN42rkB-NQTyZSFkS_Q",
        authDomain: "a2zservice-ba234.firebaseapp.com",
        projectId: "a2zservice-ba234",
        storageBucket: "a2zservice-ba234.appspot.com",
        messagingSenderId: "143381512895",
        appId: "1:143381512895:web:24c9650fd8c4f10c54fc0a",
        measurementId: "G-YD38ME5ZTN"  
    }
)
.firestore()

export default db

const { Timestamp } = firebase.firestore
export  { Timestamp } 