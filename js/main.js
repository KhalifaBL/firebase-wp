// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

document
  .getElementById("contact-form")
  .addEventListener("submit", sendToFirebase);

function sendToFirebase(event) {
    event.preventDefault();
  var name = document.getElementById("exampleInputName").value;
  var lastname = document.getElementById("exampleInputLastName").value;
  var email = document.getElementById("exampleInputEmail1").value;
  saveMessage(name, lastname, email);

  alert("You clicked submit!");
}

// Imported from Firebase documentation
// https://firebase.google.com/docs/database/web/read-and-write

function saveMessage(name, lastname, email) {
  var messagesRef = firebase.database().ref("contact-form/" + name+ 11223);
  //var newElement = messagesRef.push();
  messagesRef.set({
    Username: name,
    UserLastName: lastname,
    UserEmail: email,
  });
}
