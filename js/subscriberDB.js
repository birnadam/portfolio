// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyATYWoZpGO6PqgpK6EG-yKAiSsVVQCjVAY",
  authDomain: "take5in5numbers.firebaseapp.com",
  databaseURL: "https://take5in5numbers.firebaseio.com",
  projectId: "take5in5numbers",
  storageBucket: "take5in5numbers.appspot.com",
  messagingSenderId: "778611971970",
  appId: "1:778611971970:web:5ee0a73e4b060556"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Referencing Firebase
var emailsRef = firebase.database().ref('emails');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var email = getInputVal('email');

  // Save email
  var newemailRef = emailsRef.push();
  newemailRef.set({
    email:email,
  });

  // Clear form
  document.getElementById('contactForm').reset();
  
  // Alert user
  alert("Your email have been saved to the subscriber list!")
  alert("You will be emailed upon any update to Birna's portfolio.") 
}

// Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}