let userName=document.getElementById('upname');
let userEmail=document.getElementById('upemail');
let userPassword=document.getElementById('password')
let register=document.getElementById('register')
let error=document.getElementById('error')
let success=document.getElementById('success')
let btn=document.querySelectorAll('#button');
let number=document.getElementById('cartNumber')
let userDetails=[];

register.addEventListener('click' , function(){
    userData()
})

if (localStorage.getItem("info") != null) {
    userDetails = JSON.parse(localStorage.getItem("info"));
}

function userData(){
   if( validation()){
    let user={
        name:userName.value,
        email:userEmail.value,
        password:userPassword.value
    };
   // console.log(user);
    userDetails.push(user);
    localStorage.setItem("info", JSON.stringify(userDetails));
    console.log(userDetails);
   }
    emptyData()
   // clear()
}
function emptyData(){
    if(userName.value == "" || userEmail.value =="" || userPassword.value ==""){
        error.style.display="block";
        return false;
    }
    else{
        error.style.display="none";
        window.location.href='home.html'
        return true;
    }
}

function validation(){
    let letters= /^[A-Za-z]{2,}$/;
    let regexEmail= /^([a-zA-Z0-9@.!#$%^&* ]+)$/;
    let regexPass= /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/;
    if(letters.test(userName.value) && regexEmail.test(userEmail.value) && regexPass.test(userPassword.value)){
        error.style.display="none";
       // success.style.display="block"
        return true
    }
    else{
        error.style.display="block";
       // success.style.display="none";
        return false;
    }
}


 function clear(){
    userName.value="";
    userEmail.value="";
    userPassword.value="";
 }
 
 for(let i=0; i<btn.length; i++){
    btn[i].addEventListener('click' , function() {
        number.innerHTML=0+1;
       // console.log('hello');
    }
        )
    
   
 }

 