
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdP07mtinEwemeNbkgKJsTQYIpBeYrXvE",
    authDomain: "lets-chat-web-app-2-7863b.firebaseapp.com",
    projectId: "lets-chat-web-app-2-7863b",
    storageBucket: "lets-chat-web-app-2-7863b.appspot.com",
    messagingSenderId: "274095591068",
    appId: "1:274095591068:web:43cf513dedd6c0567ae759"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



