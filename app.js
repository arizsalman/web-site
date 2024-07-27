import { auth ,db,storage,onAuthStateChanged,createUserWithEmailAndPassword} from "./utilz/utilz";

console.log(auth);
console.log(storage);
console.log(db);

onAuthStateChanged(auth, (user) => {
  if (user) {
    

    const uid = user.uid;
    // ...
  } else {
 
    window.location.href="/auth/login/index.html"
  }
});