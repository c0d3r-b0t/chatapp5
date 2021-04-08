var firebaseConfig = {
  apiKey: "AIzaSyAmY5iEyWh4tnRyN-incUXmWFRqzMzxBsQ",
  authDomain: "chat-app-2393a.firebaseapp.com",
  projectId: "chat-app-2393a",
  storageBucket: "chat-app-2393a.appspot.com",
  messagingSenderId: "859488635523",
  appId: "1:859488635523:web:95fb1a3aeef01bde3929b6"
};

firebase.initializeApp(firebaseConfig);

  function logout(){
      window.location="index.html";
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
 
row = "<div class='room_name' id="+room_name+"onclick='redirectToRoomName(this.id)'>#"+room_name+"</div><hr>";
 
   });});}
getData();

  function addroom(){
    room_name=document.getElementById("roomname").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"adding roomname"
    });
    localStorage.setItem("roomname",room_name);
    window.location="chatapp.html";
  }

  function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location="index.html";
  }