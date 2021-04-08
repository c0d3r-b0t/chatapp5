var firebaseConfig = {
      apiKey: "AIzaSyAmY5iEyWh4tnRyN-incUXmWFRqzMzxBsQ",
      authDomain: "chat-app-2393a.firebaseapp.com",
      projectId: "chat-app-2393a",
      storageBucket: "chat-app-2393a.appspot.com",
      messagingSenderId: "859488635523",
      appId: "1:859488635523:web:95fb1a3aeef01bde3929b6"
    };

    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
console.log(message_data);
 nam= message_data('name');
 message=message_data('message');
 like=message_data('like');
 name_with_tag="<h4>"+nam+"<img class='user_tick' src='tick.png'></h4>";
 msg_with_tag ="<h4 class='message_h4'>"+message+"</h4>";
 like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+  "onclick='updatelike(this.id)'>";
 span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> Like:"+like+"</span> </button>";
 row=name_with_tag+msg_with_tag+like_button+span_with_tag;
 document.getElementById("output").innerHTML+=row;

      } });  }); }
getData();

function updatelike(message_id){
      console.log("clicked on like button="+message_id);
      button_id= message_id;
      likes=document.getElementById(button_id).value;
      updatedlikes=Number(likes)+1;
      console.log(updatedlikes);

      firebase.database().ref(roomname).child(message_id).update({
            like:updatedlikes
      });

}

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
    }
