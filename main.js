function adduser(){
    user=document.getElementById("username").value;
    localStorage.setItem("username", user);
    window.location="chatapp.html";
}

