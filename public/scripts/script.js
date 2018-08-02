firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        //window.location.href="main.html";
    } else {
    }
  });

function signup(){
  
        const email = document.getElementById("txtEmail").value;
        alert(email);
        const pass = document.getElementById("txtPassword").value;
        alert(pass);
        firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
        window.log(error.message);
        });

        var user = firebase.auth().currentUser;
        var emailAddress;
        if (user != null) {
            window.location.href="main.html";
        }
}

function signin(){
    const email = document.getElementById("txtEmail").value;
    const pass = document.getElementById("txtPassword").value;
    var errorMessage;
    firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        errorMessage = error.message;
        window.alert(errorMessage);
      });
    
    var user = firebase.auth().currentUser;
    var emailAddress;
    if (user != null) {
        window.location.href="main.html";
    }
}

function logout(){
    firebase.auth().signOut().then(function() {
        window.location.href = 'index.html';
      }).catch(function(error) {
        // An error happened.
      });
}

function userWelcome(){
    var user = firebase.auth().currentUser;
    var emailAddress;
    if (user != null) {
        emailAddress = user.email;
        alert(emailAddress);
        document.getElementById("welcome").innerHTML = emailAddress;
    }
}




