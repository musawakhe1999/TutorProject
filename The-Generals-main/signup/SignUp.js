
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA-xyHwPeXljy89Bmcew0RFONh9Sz-ai3g",
    authDomain: "bright-future-tutors.firebaseapp.com",
   projectId: "bright-future-tutors",
   storageBucket: "bright-future-tutors.appspot.com",
    messagingSenderId: "165675901613",
   appId: "1:165675901613:web:1792abc14faf0ce75e5c24"
});
console.log("js script is running");

// Initialize Firebase



   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();

//making an function for storing data
const signUp = () => {
    console.log("Method is running");
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const username = document.getElementById('username');

    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password,username)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}



//form.addEventListener('submit', e => {
  //  e.preventDefault();

    //validateInputs();
//});

//const setError = (element, message) => {
   // const inputControl = element.parentElement;
    //const errorDisplay = inputControl.querySelector('.error');

    //errorDisplay.innerText = message;
    //inputControl.classList.add('error');
    //inputControl.classList.remove('success')
//}

//const setSuccess = element => {
  //  const inputControl = element.parentElement;
  //  const errorDisplay = inputControl.querySelector('.error');

   // errorDisplay.innerText = '';
    //inputControl.classList.add('success');
    //inputControl.classList.remove('error');
//};

//const isValidEmail = email => {
    //const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //return re.test(String(email).toLowerCase());
//}

//const validateInputs = () => {
    //const usernameValue = username.value.trim();
    //const emailValue = email.value.trim();
    //const passwordValue = password.value.trim();
   // const password2Value = password2.value.trim();

   // if(usernameValue === '') {
        //setError(username, 'Username is required');
    //} else {
        //setSuccess(username);
    //}

   // if(emailValue === '') {
        //setError(email, 'Email is required');
   // } else if (!isValidEmail(emailValue)) {
      //  setError(email, 'Provide a valid email address');
    //} else {
       // setSuccess(email);
    //}

    //if(passwordValue === '') {
    //     setError(password, 'Password is required');
    // } else if (passwordValue.length < 8 ) {
    //     setError(password, 'Password must be at least 8 character.')
    // } else {
    //     if(password2Value === '') {
    //         setError(password2, 'Please confirm your password');
    //     } else if (password2Value !== passwordValue) {
    //         setError(password2, "Passwords doesn't match");
    //     } else {
    //         setSuccess(password2);
    //     }    
    //     setSuccess(password);
    // }

   

//};
