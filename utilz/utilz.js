import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getFirestore,
        doc,setDoc
 } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { getStorage,ref,uploadBytes,getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";



const firebaseConfig = {
  apiKey: "AIzaSyAX791WHG19jMKcBc1td9bVM-IVEbXO3WA",
  authDomain: "car-website-7b3b1.firebaseapp.com",
  projectId: "car-website-7b3b1",
  storageBucket: "car-website-7b3b1.appspot.com",
  messagingSenderId: "872585471483",
  appId: "1:872585471483:web:25e2c30e5433532b16975e",
  measurementId: "G-0H84F62NM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// const analytics = getAnalytics(app);

export{auth,db,storage,onAuthStateChanged,createUserWithEmailAndPassword,doc,setDoc,
  ref,uploadBytes,getDownloadURL,signInWithEmailAndPassword
};