$(function() {
  var config = {
    apiKey: "AIzaSyCKrjgs7TMiPDl-nqaqnBTAhigNrNszQPk",
    authDomain: "swamphacks-a6338.firebaseapp.com",
    databaseURL: "https://swamphacks-a6338.firebaseio.com",
    storageBucket: "swamphacks-a6338.appspot.com",
    messagingSenderId: "949283718048"
  };

  var actionCode = "verifyEmail";
  var app = firebase.initializeApp(config);
  var auth = app.auth();

  function verifyEmail(auth, actionCode) {
  // Try to apply the email verification code.
  auth.applyActionCode(actionCode).then(function(resp) {
    // Email address has been verified.
    console.log('it is lit');
    // You could also provide the user with a link back to the app.
  }).catch(function(error) {
    // Code is invalid or expired. Ask the user to verify their email address
    // again.
  });
}

  // :(
  function makePass () {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 7; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  $('#subscribe').click( event => {
    event.preventDefault();
    var email = $("#email").val();
    var pass = makePass();
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email == "" || !email.match(re)) {
      $('.submitted').text( "Please enter an e-mail address." );
    }
    else {
      firebase.database().ref('subscribed-users').push({
        email
      }).then(() =>{
        $('.submitted').text( "Thanks for subscribing!  Check your e-mail for confirmation." ).show();
        $('#subscribe').css(
        //'color', '#fff',
        'background-color', '#4d94ff' 
        );
      }).then(() => {
        auth.createUserWithEmailAndPassword(email, pass);
      }).catch(e => { console.log(e); });

      firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
          firebaseUser.sendEmailVerification();
          console.log('the email sent');
          firebase.auth().signOut();
          console.log('signed out');
        } else {
          console.log('something is wrong');
        }
      });
     }
  });

  //check if the page is refreshed, log the current user out

});
