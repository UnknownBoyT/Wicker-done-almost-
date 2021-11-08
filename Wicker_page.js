const firebaseConfig = {
      apiKey: "AIzaSyC2vGYEFE-M9G6zcFRo8LqDx_j03dj8MUY",
      authDomain: "kwitter-80b47.firebaseapp.com",
      databaseURL: "https://kwitter-80b47-default-rtdb.firebaseio.com",
      projectId: "kwitter-80b47",
      storageBucket: "kwitter-80b47.appspot.com",
      messagingSenderId: "445087622870",
      appId: "1:445087622870:web:5f2b732beabb1662b30b77"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);//YOUR FIREBASE LINKS
   username = localStorage.getItem("user_name");
   roomname = localStorage.getItem("room_name");
   function send(){
         msg = document.getElementById("msg").value;
         firebase.database().ref(roomname).push({
            Name:username,
            message : msg,
            like : 0
         });
         document.getElementById("msg").value;
   }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
