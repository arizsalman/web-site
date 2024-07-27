import {auth, createUserWithEmailAndPassword,doc,
         setDoc,
         ref,uploadBytes,getDownloadURL, 
         storage,
         db
 } from "../../utilz/utilz.js";





  
  //1.Create Account => auth,createUserWithEmailAndPassword
  //2.Upload Image => ref, uploadBytes,getDownloadURL
  //3.Set COmplete Data into Firestore =>doc , setDoc
  
  const signup_form = document.getElementById("signup_form");
  const submit_btn = document.getElementById("submit_btn");
  
  signup_form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(e);
    console.log(e.target);
  
    const img = e.target[0].files[0];
    const email = e.target[1].value;
    const password = e.target[2].value;
    const firstName = e.target[4].value;
    const lastName = e.target[5].value;
    const phone = e.target[6].value;
    const company = e.target[7].value;
  
    const userInfo = {
      img,
      email,
      password,
      firstName,
      lastName,
      phone,
      company,
    };
  
    //create account
    submit_btn.disabled = true;
    submit_btn.innerText = "loading...";
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log("user=>", user.user.uid);
        submit_btn.disabled = false
        submit_btn.innerText = "Submit";
        // upload user image
        const userRef = ref(storage, `user/${user.user.uid}`);
        uploadBytes(userRef, img)
          .then(() => {
            console.log("user image uploaded");
            // getting url of the image we just uploaded
            getDownloadURL(userRef)
              .then((url) => {
                console.log("url agya bhai=>", url);
  
                // update user info object
                userInfo.img = url;
                const signupImg = document.getElementById('signup_img');
                signupImg.src = url
  
                // created user document reference
                const userDbRef = doc(db, "users", user.user.uid);
  
                // set this document to db
                setDoc(userDbRef, userInfo).then(() => {
                  console.log("User Object Updated into DB");
                  window.location.href = "/";
                  submit_btn.disabled = true;
                  submit_btn.innerText = "Loading...";
                });
              })
              .catch((err) => {
                console.log("url firebase nahn de raha",err);
                submit_btn.disabled = false;
                submit_btn.innerText = "Submit";
              });
          })
          .catch(() => {
            console.log("Error in uploading user image");
            submit_btn.disabled = false;
            submit_btn.innerText = "Submit";
          });
      })
      .catch((err) => {
        alert(err), (submit_btn.disabled = false);
        submit_btn.innerText = "Submit";
      });

  
    console.log(userInfo);
  });