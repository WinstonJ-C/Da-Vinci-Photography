function auth(){
    var name= document.getElementById("firstName").value.trim();
    var sur=document.getElementById("lastName").value.trim();
    var yahoo=document.getElementById("middle").value.trim();
document.getElementById("fill").addEventListener("click",function(e){e.preventDefault()
    });
    if(name==""){
        document.getElementById("fname").style="color:red;font-size:15px;font-family:monospace";
 document.getElementById("fname").innerHTML="Please type in your first name";
 }else{
     document.getElementById("fname").innerHTML="";
 }
 if(sur==""){
    document.getElementById("lname").style="color:red;font-size:15px;font-family:monospace";
    document.getElementById("lname").innerHTML="Please type in your last name";
 }else{
    document.getElementById("lname").innerHTML="";
 }
 if(yahoo==""){
    document.getElementById("message").style="color:red;font-size:15px;font-family:monospace"
    document.getElementById("message").innerHTML="Please type in your email"
 }else{
    document.getElementById("message").innerHTML=""; 
 }
}
