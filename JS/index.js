 var mailkey="fAT36@gmail.com";
 var passkey="1234";
 function f()
 {
    var userId=document.getElementById("mail").value;
    var password=document.getElementById("pass").value;
    if(userId != mailkey && passkey == password)
    {
      document.getElementById("mail").style.borderColor="red";
      document.getElementById("loginCheck").innerHTML="Wrong mail id";
      document.getElementById("loginCheck").style.color="red";
         
    }
     else if(userId == mailkey && passkey != password)
    {
      document.getElementById("pass").style.borderColor="red";
      document.getElementById("loginCheck").innerHTML="Wrong password";
      document.getElementById("loginCheck").style.color="red";
         
    }
    else if(userId == mailkey && passkey == password)
    {
      document.getElementById("pass").style.borderColor="green";
      document.getElementById("mail").style.borderColor="green";
      document.getElementById("loginCheck").innerHTML="";
      document.getElementById("button").setAttribute("type","submit");
      document.getElementById("form").setAttribute("action","./HTML/Home.html")

    }
    else if(userId != mailkey && passkey != password){
      document.getElementById("pass").style.borderColor="red";
      document.getElementById("mail").style.borderColor="red";
      document.getElementById("loginCheck").innerHTML="wrong ID and Password";
      document.getElementById("loginCheck").style.color="red";
    }
 }
 function visibel()
 {
  document.getElementById("pass").setAttribute("type","text");
  document.getElementById("visible").style.transform="rotateY(360deg)"
  document.getElementById("visible").setAttribute("src","./Assets/Monkey_close_eye-removebg-preview.png");

 }
 function hide()
 {
  document.getElementById("pass").setAttribute("type","password");
  document.getElementById("visible").style.transform="rotateY(-360deg)";
  document.getElementById("visible").setAttribute("src","./Assets/open_eye_mokey-removebg-preview.png");
 }
