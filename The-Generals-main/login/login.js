
  // setting up firebase with our website
  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA-xyHwPeXljy89Bmcew0RFONh9Sz-ai3g",
    authDomain: "bright-future-tutors.firebaseapp.com",
   projectId: "bright-future-tutors",
   storageBucket: "bright-future-tutors.appspot.com",
    messagingSenderId: "165675901613",
   appId: "1:165675901613:web:1792abc14faf0ce75e5c24"
});
console.log("Script is running");

  // Initialize Firebase
  const db = firebaseApp.firestore();
const auth = firebaseApp.auth();


const myName=()=>{
  console.log("My name is Musawakhe ");
}
//Getting All the Objects of html
const signIn = () => {
  const email = document.getElementById("login__username").value;
  const password = document.getElementById("login__password").value;
  // firebase code
  firebase.auth().signInWithEmailAndPassword(email, password)
      .then((result) => {
          // Signed in 
          document.write("You are Signed In")
          console.log(result)
      })
      .catch((error) => {
          console.log(error.code);
          console.log(error.message)
      });
}