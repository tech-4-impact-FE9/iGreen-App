// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhn7FG7D59A55LJbrAaBi3IhuF82h8544",
  authDomain: "igreen-app-cd4ba.firebaseapp.com",
  databaseURL: "https://igreen-app-cd4ba-default-rtdb.firebaseio.com",
  projectId: "igreen-app-cd4ba",
  storageBucket: "igreen-app-cd4ba.appspot.com",
  messagingSenderId: "738104909971",
  appId: "1:738104909971:web:96d2a15b0198e202b3ad66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const signupButton = document.getElementById("sign-up-btn");

signupButton.addEventListener("click", (e) => {
  let emailSignup = document.getElementById("email-sign-up").value;
  let username = document.getElementById("username-sign-up").value;
  let passwordSignup = document.getElementById("password-sign-up").value;

  createUserWithEmailAndPassword(auth, emailSignup, passwordSignup)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
        
      set(ref(database, "users/" + user.uid), {
        email: emailSignup,
        username: username,
        password: passwordSignup
      })
      //alert("Registered Succsesfull");
       .then(() => {
          // Data saved successfully!
          alert("user telah sukses dibuat");
          //location.href = "http://127.0.0.1:5500/Login/login.html"
        }) 
        .catch((error) => {
          //the write failed
          alert(error);
        }); 
    }) 
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});